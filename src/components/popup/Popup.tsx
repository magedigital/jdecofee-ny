import { throttle } from 'throttle-debounce';

import React from 'react';

import Editor from '@/src/components/editor/Editor.tsx';

import close from './methods/close.ts';
import keysCallback from './methods/keysCallback.ts';
import resizeHandler from './methods/resizeHandler.ts';
import setMenuState from './methods/setMenuState.ts';

import PopupI from './types.ts';

import renderClose from './renders/renderClose.tsx';
import renderPopup from './renders/renderPopup.tsx';

class Popup<P = {}, S = {}>
    extends Editor<PopupI<P, S>['props'], PopupI<P, S>['state']>
    implements PopupI<P, S>
{
    parent: PopupI['parent'];
    setResize: PopupI['setResize'];

    constructor(props: PopupI<P, S>['props']) {
        super(props);
        this.state = {} as PopupI<P, S>['state'];

        this.setResize = throttle(300, this.resizeHandler.bind(this));

        document.addEventListener('customResize', this.setResize);

        this.unmountHandlers.resize = () => {
            document.removeEventListener('customResize', this.setResize);
        };

        this.intervals.resizeH = setInterval(() => {
            if (this.state.isInit) {
                this.resizeHandler();
                clearInterval(this.intervals.resizeH);
            }
        }, 100);

        this.parent = React.createRef();
    }

    name = '' as any;
    keys = ['Escape' as const];

    close = close;

    keysCallback = keysCallback;

    setMenuState = setMenuState;

    resizeHandler = resizeHandler;

    renderClose = renderClose;
    renderPopup = renderPopup;
    renderContent = '' as any;
}

export default Popup;
