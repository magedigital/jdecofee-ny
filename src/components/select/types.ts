import DefaultI from '@/src/components/default/types';

type PropsT = {
    onChange?: (d: { value: string }) => void;
    value: string | undefined;
    list: { id: string; title: string }[];
    disabled?: boolean;
};

type StateT = {
    isActive?: boolean;
};

interface SelectI extends DefaultI<PropsT, StateT> {
    setActive(this: SelectI, a?: boolean): Promise<void>;

    renderField(this: SelectI): React.ReactNode;
    renderList(this: SelectI): React.ReactNode;
}

export default SelectI;
