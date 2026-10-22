import React from 'react';

import Popup from '@/src/components/popup/Popup.tsx';
import { StoreT, WithStore } from '@/src/store/store.tsx';

import setStep from './methods/setStep.ts';

import CodePopupI from './types.ts';

import renderContent from './renders/renderContent.tsx';
import renderStep from './renders/renderStep.tsx';

class CodePopup extends Popup<CodePopupI['props'], CodePopupI['state']> implements CodePopupI {
    parent: CodePopupI['parent'];

    constructor(props: CodePopupI['props']) {
        super(props);
        this.state = {
            currentStep: 'start',
        };

        this.parent = React.createRef();
    }

    name = 'codePopup' as const;

    setStep = setStep;

    renderStep = renderStep;
    renderContent = renderContent;

    render() {
        return this.renderPopup({
            render: this.renderContent.bind(this),
        });
    }
}

const mapStore = (s: StoreT) => ({
    codePopup: s.codePopup,
});

export default WithStore(CodePopup, mapStore);
