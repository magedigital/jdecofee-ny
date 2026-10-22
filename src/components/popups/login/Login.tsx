import React from 'react';

import Popup from '@/src/components/popup/Popup.tsx';
import { StoreT, WithStore } from '@/src/store/store.tsx';

import init from './methods/init.ts';
import sendForm from './methods/sendForm.ts';

import LoginPopupI from './types.ts';

import renderContent from './renders/renderContent.tsx';
import renderFields from './renders/renderFields.tsx';
import renderFoot from './renders/renderFoot.tsx';
import renderHead from './renders/renderHead.tsx';
import renderSocials from './renders/renderSocials.tsx';

class LoginPopup extends Popup<LoginPopupI['props'], LoginPopupI['state']> implements LoginPopupI {
    parent: LoginPopupI['parent'];

    constructor(props: LoginPopupI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    name = 'loginPopup' as const;

    init = init;

    sendForm = sendForm;

    renderContent = renderContent;
    renderHead = renderHead;
    renderFields = renderFields;
    renderSocials = renderSocials;
    renderFoot = renderFoot;

    render() {
        return this.renderPopup({
            render: this.renderContent.bind(this),
        });
    }
}

const mapStore = (store: StoreT) => ({
    loginPopup: store.loginPopup,
    device: store.device,
});

export default WithStore(LoginPopup, mapStore);
