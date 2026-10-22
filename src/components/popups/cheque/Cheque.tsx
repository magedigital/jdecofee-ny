import React from 'react';

import Popup from '@/src/components/popup/Popup.tsx';
import { StoreT, WithStore } from '@/src/store/store.tsx';

import setQRCode from './methods/setQRCode.ts';
import setStep from './methods/setStep.ts';
import uploadQRCode from './methods/uploadQRCode.ts';

import ChequePopupI from './types.ts';

import renderContent from './renders/renderContent.tsx';
import renderStep from './renders/renderStep.tsx';

class ChequePopup
    extends Popup<ChequePopupI['props'], ChequePopupI['state']>
    implements ChequePopupI
{
    parent: ChequePopupI['parent'];

    constructor(props: ChequePopupI['props']) {
        super(props);
        this.state = {
            currentStep: 'start',
        };

        this.parent = React.createRef();
    }

    name = 'chequePopup' as const;

    setStep = setStep;
    uploadQRCode = uploadQRCode;
    setQRCode = setQRCode;

    renderStep = renderStep;
    renderContent = renderContent;

    render() {
        return this.renderPopup({
            render: this.renderContent.bind(this),
        });
    }
}

const mapStore = (s: StoreT) => ({
    chequePopup: s.chequePopup,
});

export default WithStore(ChequePopup, mapStore);
