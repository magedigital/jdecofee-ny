import DefaultI from '@/src/components/default/types';
import { StoreT } from '@/src/store/store';

type PropsT = {
    mainContent: StoreT['mainContent'];
};

type StateT = {};

interface CookiesI extends DefaultI<PropsT, StateT> {}

export default CookiesI;
