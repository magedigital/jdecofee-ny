import DefaultI from '@/src/components/default/types';
import { inputRegs } from '@/src/components/input/static/regs';

type PropsT = {
    value: string;
    name: string;
    setValue: (d: { value: string | number | boolean | undefined; name: string }) => Promise<void>;
    uploadFile?: (d: { file: File; name: string }) => Promise<void>;
    disabled?: boolean;
    data?: ObjT;
} & FieldT;

type StateT = {
    addressesList?: string[];
};

type FieldT = {
    type: 'select' | 'input' | 'checkbox' | 'file' | 'address';
    support?: string;
    input?: Partial<{
        reg: keyof typeof inputRegs;
        support: string;
        regExp: RegExp;
        isAmount: boolean;
        isArea: boolean;
        isPassword: boolean;
        isAddress: boolean;
    }>;
    select?: Partial<{
        list: { id: string; title: string }[];
    }>;
    checkbox?: Partial<{
        content: React.ReactNode;
    }>;
};

interface FieldI extends DefaultI<PropsT, StateT> {
    getAddressesInc: () => void;
    getAddresses(this: FieldI): Promise<void>;

    renderField(this: FieldI): React.ReactNode;
}

export default FieldI;
export type { FieldT };
