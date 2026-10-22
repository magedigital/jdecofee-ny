import DefaultI from '@/src/components/default/types';
import { StoreT } from '@/src/store/store';

type PropsT = {
    length: number;
    callback: (code: string) => void;
    clearKey?: string;
    loading?: boolean;
    device: StoreT['device'];
};

type StateT = {
    inputs: string[];
};

interface CodeInputsI extends DefaultI<PropsT, StateT> {
    parent: React.RefObject<HTMLDivElement | null>;

    clearKey?: string;

    inputHandler(this: CodeInputsI, key: number, data: { value: string }): Promise<void>;

    checkClear(this: CodeInputsI): Promise<void>;
}

export default CodeInputsI;
