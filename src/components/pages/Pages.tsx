import { v4 } from 'uuid';

import React from 'react';

import Default from '@/src/components/default/Default.tsx';
import List from '@/src/components/list/List.tsx';

import getPages from './methods/getPages.ts';
import init from './methods/init.ts';

import PagesI, { ThisPageT } from './types.ts';

import { StoreT, WithStore } from '../../store/store.tsx';

class Pages extends Default<PagesI['props'], PagesI['state']> implements PagesI {
    constructor(props: PagesI['props']) {
        super(props);
        this.state = {
            pages: [],
        };
    }

    init = init;
    getPages = getPages;

    render() {
        const {
            context,
            parentClass,
            itemClass,
            pageClass,
            parentName,
            storePages,
            parentStyleProps = [],
            parentRealStyleProps = [],
            pagesOrder,
            pagesClass,
            renderKey: r,
            ...listProps
        } = this.props;
        const pages = this.getPages();
        const renderKey = pages.map((page) => page._id).join('');
        const disabled = parentName ? !storePages[parentName].isShow : undefined;

        return (
            <List
                renderKey={this.getClass(renderKey, r, this.state.renderKey)}
                items={pages}
                parentClass={this.getClass(parentClass || 'body__pages', pagesClass)}
                itemClass={itemClass || 'body__page'}
                itemStyleProps={[]}
                parentStyleProps={parentStyleProps}
                parentRealStyleProps={parentRealStyleProps}
                render={({ item, items }: { item: ThisPageT; items: ThisPageT[] }) => ({
                    item: this.props.pages[item.pageName]?.render.call(context, {
                        id: item.id,
                        setRenderKey: () => this.setState({ renderKey: v4() }),
                        disabled,
                    }),
                    className: this.getClass(
                        '_PAGE',
                        item.isPopup ? '_popup' : '',
                        `_${item.pageName}`,
                        pageClass,
                        items.filter((i) => i.id).length > 1 ? '_withId' : '',
                    ),
                })}
                disabled={disabled}
                allItems={pagesOrder || this.getPages(true).map((page) => page.pageName)}
                allItemProp="pageName"
                currentItem={pages[0]?.pageName}
                resizeWidth={true}
                {...listProps}
            />
        );
    }
}

const mapStore = (store: StoreT) => ({ storePages: store.pages });

export default WithStore(Pages, mapStore);
