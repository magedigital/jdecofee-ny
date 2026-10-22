import React from 'react';

import CustomHead from '@/src/components/customHead/CustomHead.tsx';
import Default from '@/src/components/default/Default.tsx';
import Pages from '@/src/components/pages/Pages.tsx';
import { PopupT, popups } from '@/src/store/popups.ts';

import Errors from './components/errors/Errors.tsx';

import changePageListener from './methods/changePageListener.ts';
import getMetaTitle from './methods/getMetaTitle.ts';
import init from './methods/init.ts';
import popupsHandler from './methods/popupsHandler.ts';
import resizeHandler from './methods/resizeHandler.ts';

import RootI from './types.ts';

import { AppRouter } from '../../index.tsx';
import { StoreT, WithStore } from '../../store/store.tsx';
import renderCookies from './renders/renderCookies.tsx';
import renderPopups from './renders/renderPopups.tsx';
import { rootPages } from './static/pages.tsx';

const Styles = typeof window !== 'undefined' && require('./components/Styles.tsx').default;

class Root extends Default<RootI['props'], RootI['state']> implements RootI {
    parent: React.RefObject<HTMLDivElement | null>;

    constructor(props: RootI['props']) {
        super(props);
        this.state = {};

        this.changePageListener = this.changePageListener.bind(this);

        this.parent = React.createRef();
    }

    resizeHandler = resizeHandler;
    popupsHandler = popupsHandler;
    changePageListener = changePageListener;
    getMetaTitle = getMetaTitle;

    init = init;

    renderPopups = renderPopups;
    renderCookies = renderCookies;

    render() {
        const { isRootInit } = this.props;

        return (
            <>
                {false && <CustomHead title={this.getMetaTitle()} />}
                {Styles && <Styles />}
                <Errors />
                <div className={this.getClass('body__content', window.isBot && '_BOT')}>
                    {isRootInit && (
                        <Pages
                            context={this}
                            pages={rootPages}
                            filter={(name) => !AppRouter.pages[name].level}
                        />
                    )}
                    {this.renderCookies()}
                    {this.renderPopups()}
                </div>
            </>
        );
    }
}

const mapStore = (store: StoreT) => ({
    isRootInit: store.isRootInit,
    isCookiesShow: store.isCookiesShow,
    currentPopup: store.currentPopup,
    pages: store.pages,
    ...(() => {
        const popupsData: Record<keyof typeof popups, PopupT> = {} as Record<
            keyof typeof popups,
            PopupT
        >;

        (Object.keys(popups) as (keyof typeof popups)[]).forEach((key) => {
            popupsData[key] = store[key];
        });

        return popupsData;
    })(),
});

export default WithStore(Root, mapStore);
