import { promo } from '@/src/index.tsx';
import { globalError } from '@/src/utils/globalError.ts';

import I from '../types.ts';
import { setError } from '@/src/views/root/components/errors/utils/errorHandler.ts';

const sendAgainReg: I['sendAgainReg'] = async function () {
    const { login } = this.props;

    if (!login) {
        return;
    }

    if (this.state.isSendAgain || this.state.loadingKey) {
        return;
    }

    await this.asyncSetState({ loadingKey: 'again', error: undefined });

    try {
        await promo.auth.register(login);
        setError({text:'Код успешно отправлен',type:'success'})
        await this.asyncSetState({ isSendAgain: true });

        this.timers.again = setTimeout(async () => {
            await this.asyncSetState({ isSendAgain: false });
        }, 30_000);
    } catch (e) {
        globalError(e);
    }

    await this.asyncSetState({ loadingKey: undefined });
};

export default sendAgainReg;
