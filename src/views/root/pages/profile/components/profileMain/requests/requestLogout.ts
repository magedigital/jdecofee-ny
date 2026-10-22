import { promo } from '@/src/index.tsx';
import { logoutHandler } from '@/src/utils/checkAuth.ts';

import I from '../types.ts';

const requestLogout: I['requestLogout'] = async function () {
    await this.asyncSetState({ loadingKey: 'logout' });

    try {
        await promo.auth.logout();
        await logoutHandler();
    } catch (e) {}

    await this.asyncSetState({ loadingKey: undefined });
};

export default requestLogout;
