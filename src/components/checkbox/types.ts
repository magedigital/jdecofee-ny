import DefaultI from '@/src/components/default/types';

type PropsT = {
    children: React.ReactNode;
    value: boolean;
    onChange: (data: { value: boolean }) => Promise<void>;
    disabled?: boolean;
};

type StateT = {};

interface CheckboxI extends DefaultI<PropsT, StateT> {}

export default CheckboxI;
