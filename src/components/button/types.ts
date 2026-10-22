import DefaultI from '@/src/components/default/types';

type PropsT = {
    children: React.ReactNode;
} & Partial<{
    onClick: () => void;
    isLabel: boolean;
    loading: boolean;
}>;

type StateT = {};

interface ButtonI extends DefaultI<PropsT, StateT> {}

export default ButtonI;
