import React from 'react';

import Popup from '@/src/components/popup/Popup.tsx';
import { StoreT, WithStore } from '@/src/store/store.tsx';

import setStep from './methods/setStep.ts';

import RegPopupI from './types.ts';

import renderContent from './renders/renderContent.tsx';
import renderStep from './renders/renderStep.tsx';

class RegPopup extends Popup<RegPopupI['props'], RegPopupI['state']> implements RegPopupI {
    parent: RegPopupI['parent'];

    constructor(props: RegPopupI['props']) {
        super(props);
        this.state = {
            currentStep: 'form',
        };

        this.parent = React.createRef();
    }

    name = 'regPopup' as const;

    setStep = setStep;

    renderContent = renderContent;
    renderStep = renderStep;

    render() {
        return this.renderPopup({
            render: this.renderContent.bind(this),
        });
    }
}

const mapStore = (s: StoreT) => ({
    regPopup: s.regPopup,
    device: s.device,
});

export default WithStore(RegPopup, mapStore);
