import { promo } from '@/src/index.tsx';
import checkAuth from '@/src/utils/checkAuth.ts';
import { globalError } from '@/src/utils/globalError.ts';

import I from '../types.ts';

const sendForm: I['sendForm'] = async function () {
    const { form } = this.state;

    if (!form) {
        return;
    }

    if (promo.getToken()) {
        return;
    }

    await this.asyncSetState({ loadingKey: 'send', error: undefined });

    try {
        await promo.auth.login(form.login!, form.password!);
        await checkAuth({ redirect: true });
    } catch (e) {
        globalError(e);
    }

    await this.asyncSetState({ loadingKey: undefined });
};

export default sendForm;
