import PageI from '@/src/components/page/types';
import { StoreT } from '@/src/store/store';

type PropsT = {
    mainContent: StoreT['mainContent'];
};

type StateT = {};

type MainContentT = Partial<{
    footerDisclaimer: string;
    docs: Partial<{
        rules: string;
        policy: string;
        personal: string;
    }>;
}>;

type PrizeT = {
    title: string;
    description: string;
    thumb: string;
    price?: string;
    thumbsExtra?: [string, string][];
};

interface IndexI extends PageI<PropsT, StateT> {}

export default IndexI;
export type { MainContentT, PrizeT };
