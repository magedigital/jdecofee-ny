import { promo } from '@/src/index.tsx';

import I from '../types.ts';

const init: I['init'] = async function (this: I) {
    try {
        const extra = await promo.profile.getExtra();
        await this.asyncSetState({ isNew: false, extra });
    } catch (e) {
        await this.asyncSetState({ isNew: true });
    }
};

export default init;
