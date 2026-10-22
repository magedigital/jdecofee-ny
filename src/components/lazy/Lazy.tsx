import React from 'react';

import Default from '@/src/components/default/Default.tsx';
import { StoreT, WithStore } from '@/src/store/store.tsx';

import LazyI from './types.ts';

class Lazy extends Default<LazyI['props'], LazyI['state']> implements LazyI {
    parent: LazyI['parent'];

    constructor(props: LazyI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    render() {
        const { canLoadImage, children } = this.props;

        if (!canLoadImage) {
            return;
        }

        return children;
    }
}

const mapStore = (s: StoreT) => ({
    canLoadImage: s.canLoadImage,
});

export default WithStore(Lazy, mapStore);
