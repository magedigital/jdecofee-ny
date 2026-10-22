import EditorI from '@/src/components/editor/types';
import { StoreT } from '@/src/store/store';

import RegPopupI from '../../types';

type PropsT = {
    isConfirm?: boolean;
    device: StoreT['device'];
    mainContent: StoreT['mainContent'];
    setStep: RegPopupI['setStep'];
    updateListRender: () => Promise<void>;
};

type StateT = {
    form?: Partial<{ login: string; confirm: boolean; policy: boolean }>;
};

interface FormI extends EditorI<PropsT, StateT> {
    sendForm(this: FormI): Promise<void>;

    renderHead(this: FormI): React.ReactNode;
    renderForm(this: FormI): React.ReactNode;
    renderFoot(this: FormI): React.ReactNode;
}

export default FormI;
