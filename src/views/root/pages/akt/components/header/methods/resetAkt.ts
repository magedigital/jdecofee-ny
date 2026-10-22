import { anketRequests } from '@/src/api/requests/anket.ts';
import checkAuth from '@/src/utils/checkAuth.ts';

import I from '../types.ts';

const resetAkt: I['resetAkt'] = async function () {
    try {
        await anketRequests.resetAkt();
        await checkAuth({ redirect: false });
    } catch (e) {}
};

export default resetAkt;
