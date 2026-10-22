import { promo } from '@/src/index.tsx';
import checkAuth from '@/src/utils/checkAuth.ts';
import { globalError } from '@/src/utils/globalError.ts';

import I from '../types.ts';

const sendForm: I['sendForm'] = async function (d) {
    const { isNew } = this.state;
    const data = {
        ...d,
    };

    try {
        if (isNew) {
            await promo.profile.createExtra(data);
        } else {
            await promo.profile.updateExtra(data);
        }

        await checkAuth({ redirect: true });
    } catch (e) {
        globalError(e);
    }
};

export default sendForm;
