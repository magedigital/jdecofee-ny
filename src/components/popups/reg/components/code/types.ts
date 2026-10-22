import EditorI from '@/src/components/editor/types';
import { StoreT } from '@/src/store/store';

type PropsT = {
    isConfirm?: boolean;
    login: string;
    mailService?: string;
    device: StoreT['device'];
    updateListRender: () => Promise<void>;
};

type StateT = {
    isSendAgain?: boolean;
};

interface FormI extends EditorI<PropsT, StateT> {
    sendAgainReg(this: FormI): Promise<void>;
    sendForm(this: FormI, code: string): Promise<void>;

    renderHead(this: FormI): React.ReactNode;
    renderForm(this: FormI): React.ReactNode;
    renderFoot(this: FormI): React.ReactNode;
}

export default FormI;
