import { throttle } from 'throttle-debounce';

import React from 'react';

import Default from '@/src/components/default/Default.tsx';

import checkChange from './methods/checkChange.ts';
import checkSizes from './methods/checkSizes.ts';
import drawDirectionItems from './methods/drawDirectionItems.ts';
import drawItems from './methods/drawItems.ts';
import updateItems from './methods/updateItems.ts';

import ListI from './types.ts';

import { StoreT, WithStore } from '../../store/store.tsx';
import renderItem from './renders/renderItem.tsx';

class List extends Default<ListI['props'], ListI['state']> implements ListI {
    parent: ListI['parent'];
    resizeThrottle: ListI['resizeThrottle'];

    constructor(props: ListI['props']) {
        super(props);
        this.state = {
            items: [],
            isEmpty: true,
        };

        this.checkSizes = this.checkSizes.bind(this);

        this.parent = React.createRef();
    }

    states = {};
    indexes = {};
    timers = {};
    heights = {};

    renderItem = renderItem;

    updateItems = updateItems;
    drawItems = drawItems;
    drawDirectionItems = drawDirectionItems;
    checkSizes = checkSizes;

    checkChange = checkChange;

    componentDidMount(): void {
        this.checkChange(true);

        this.resizeThrottle = throttle(300, this.checkSizes.bind(this));

        if (this.props.resizeWidth) {
            document.addEventListener('changeWidthWindow', this.resizeThrottle!);
        }

        if (this.props.resizeHeight) {
            document.addEventListener('changeHeightWindow', this.resizeThrottle!);
        }
    }

    componentDidUpdate(): void {
        this.checkChange();
    }

    componentWillUnmount(): void {
        document.removeEventListener('changeWidthWindow', this.resizeThrottle!);
        document.removeEventListener('changeHeightWindow', this.resizeThrottle!);
    }

    render() {
        const { items, isEmpty } = this.state;
        const { parentClass, relative, changeAnimate, renderWrapper = (node) => node } = this.props;

        return (
            <div
                ref={this.parent}
                className={`list ${isEmpty ? '_empty' : ''} ${relative ? '_relative' : ''} ${parentClass} ${changeAnimate ? '_animate' : ''} ${this.id}`}
            >
                {renderWrapper(items.map((item) => this.renderItem({ item })))}
            </div>
        );
    }
}

const mapStore = (store: StoreT) => ({
    isWindowLoad: store.isWindowLoad,
});

export default WithStore(List, mapStore);
