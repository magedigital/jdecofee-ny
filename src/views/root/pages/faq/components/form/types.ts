import DefaultI from '@/src/components/default/types';
import { StoreT } from '@/src/store/store';

type PropsT = {
    disabled?: boolean;
    mainContent: StoreT['mainContent'];
};

type StateT = {
    isSuccess?: boolean;
    name?: string;
};

interface FormI extends DefaultI<PropsT, StateT> {
    sendForm(this: FormI, d: Partial<Record<string, string>>): Promise<void>;
}

export default FormI;
