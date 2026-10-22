import { promo } from '@/src/index.tsx';

import I from '../types.ts';

const pageInit: I['pageInit'] = async function (this: I) {
    try {
        const r = await promo.receipts.list(1, 100);
        await this.asyncSetState({ receipts: r.items });
    } catch (e) {}

    try {
        const r = await promo.prizes.list();
        const prizes = r.items;
        await this.asyncSetState({ prizes });
    } catch (e) {}
};

export default pageInit;
