import DefaultI from '@/src/components/default/types';

type PropsT = {
    pointAddress?: string;
    pointId?: string;
    value?: string;
    onChange: (data: { value: string }) => Promise<void>;
    pageData?: ObjT;
    setPoint?: (id?: string, address?: string) => void;
};

type StateT = {
    currentBlock: 'point' | 'manual';
    list: string[];
    search?: string;
};

interface AddressI extends DefaultI<PropsT, StateT> {
    addressHandler(this: AddressI, data: { value: string; choice?: boolean }): Promise<void>;
}

export default AddressI;
