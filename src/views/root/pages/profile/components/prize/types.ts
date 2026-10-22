import { PrizeListItem } from '@promoinstance/sdk';

import DefaultI from '@/src/components/default/types';

type PropsT = {
    prize: PrizeListItem;
    // user: ProfileT;
};

type StateT = {
    isPromoShow?: boolean;
    isPromoForceShow?: boolean;
};

interface PrizeI extends DefaultI<PropsT, StateT> {
    promoHandler(this: PrizeI, isShow?: boolean): Promise<void>;
}

export default PrizeI;
