import React from 'react';

import Default from '@/src/components/default/Default.tsx';
import { appStore } from '@/src/store/store.tsx';

import checkScroll from './methods/checkScroll.ts';
import close from './methods/close.ts';
import init from './methods/init.ts';
import keysCallback from './methods/keysCallback.ts';
import setMenuState from './methods/setMenuState.ts';

import PageI from './types.ts';

import renderInnerClose from './renders/renderInnerClose.tsx';
import renderPage from './renders/renderPage.tsx';

class Page<P extends {}, S extends {}>
    extends Default<PageI<P, S>['props'], PageI<P, S>['state']>
    implements PageI<P, S>
{
    parent: PageI<P, S>['parent'];

    constructor(props: PageI<P, S>['props']) {
        super(props);
        this.state = {} as PageI<P, S>['state'];

        this.savedPrevPageUrl = appStore.getState().prevPageUrl;

        this.parent = React.createRef();
    }

    init = init;

    setMenuState = setMenuState;

    checkScroll = checkScroll;

    keysCallback = keysCallback;
    close = close;

    renderPage = renderPage;
    renderInnerClose = renderInnerClose;
}

export default Page;
