import { promo } from '@/src/index.tsx';
import checkAuth from '@/src/utils/checkAuth.ts';
import { globalError } from '@/src/utils/globalError.ts';

import I from '../types.ts';

const sendForm: I['sendForm'] = async function (code) {
    const { login } = this.props;

    if (!login) {
        return;
    }

    await this.asyncSetState({ loadingKey: 'send', error: undefined });

    try {
        await promo.auth.verify(login, code);

        await checkAuth({ redirect: true });
    } catch (e) {
        globalError(e);
    }

    await this.asyncSetState({ loadingKey: undefined });
};

export default sendForm;
