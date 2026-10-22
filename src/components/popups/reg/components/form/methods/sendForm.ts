import { promo } from '@/src/index.tsx';
import { globalError } from '@/src/utils/globalError.ts';

import { setError } from '../../../../../../views/root/components/errors/utils/errorHandler.ts';

import I from '../types.ts';

const sendForm: I['sendForm'] = async function () {
    const { form } = this.state;
    const { setStep } = this.props;

    if (!form) {
        return;
    }

    if (!form.confirm) {
        setError({ text: 'Необходимо согласие', type: 'error' });
        return;
    }

    await this.asyncSetState({ loadingKey: 'send' });

    try {
        await promo.auth.register(form.login!);

        await setStep('code', {
            login: form.login!,
            // mailService: response.mailService,
        });
    } catch (e) {
        globalError(e);
    }

    await this.asyncSetState({ loadingKey: undefined });
};

export default sendForm;
