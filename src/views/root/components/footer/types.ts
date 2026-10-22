import { FooterContentT } from '@/src/api/requests/content';
import DefaultI from '@/src/components/default/types';
import { StoreT } from '@/src/store/store';

type PropsT = {
    mainContent: StoreT['mainContent'];
    mode?: 'inner';
    content?: FooterContentT;
};

type StateT = {};

interface FooterI extends DefaultI<PropsT, StateT> {}

export default FooterI;
