import DefaultI from '@/src/components/default/types';
import { StoreT } from '@/src/store/store';

type PropsT = {
    canLoadImage: StoreT['canLoadImage'];
    children: React.ReactNode;
};

type StateT = {};

interface LazyI extends DefaultI<PropsT, StateT> {}

export default LazyI;
