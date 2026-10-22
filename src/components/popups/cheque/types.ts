import { ChangeEvent } from 'react';

import PopupI from '@/src/components/popup/types';
import { StoreT } from '@/src/store/store';

import { chequeFormSteps } from './static/steps';

type PropsT = {
    chequePopup: StoreT['chequePopup'];
};

type StateT = {
    currentStep: keyof typeof chequeFormSteps;
    mode?: ChequeModesT;
    updateListRenderKey?: number;
};

type ChequeModesT = 'typing' | 'qr';
type ChequeScanDataT = {
    date: string;
    time: string;
    amount: string;
    fn: string;
    fd: string;
    fp: string;
};

interface ChequePopupI extends PopupI<PropsT, StateT> {
    scanData?: ChequeScanDataT;

    setStep(s: keyof typeof chequeFormSteps, m?: ChequeModesT): Promise<void>;
    uploadQRCode(data: { target: ChangeEvent<HTMLInputElement>['target'] }): Promise<void>;
    setQRCode(data: { data: string; mode: ChequeModesT }): Promise<void>;

    renderStep(this: ChequePopupI, id: keyof typeof chequeFormSteps): React.ReactNode;
}

export default ChequePopupI;
export type { ChequeScanDataT, ChequeModesT };
