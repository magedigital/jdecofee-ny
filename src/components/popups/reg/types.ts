import PopupI from '@/src/components/popup/types';
import { StoreT } from '@/src/store/store';

import { regSteps } from './static/steps';

type PropsT = {
    regPopup: StoreT['regPopup'];
    device: StoreT['device'];
};

type StateT = {
    currentStep: keyof typeof regSteps;
    updateListRenderKey?: number;
};

interface RegPopupI extends PopupI<PropsT, StateT> {
    login?: string;
    mailService?: string;

    setStep(
        s: keyof typeof regSteps,
        data?: { login: string; mailService?: string },
    ): Promise<void>;

    renderStep(this: RegPopupI, s: keyof typeof regSteps): React.ReactNode;
}

export default RegPopupI;
