import { promo } from '@/src/index.tsx';
import { globalError } from '@/src/utils/globalError.ts';
import { setError } from '@/src/views/root/components/errors/utils/errorHandler.ts';

import I from '../types.ts';

const sendForm: I['sendForm'] = async function (form) {
    if (!form.agreement || !form.personal) {
        setError({ text: 'Необходимо согласие', type: 'error' });
        return;
    }
    try {
        await promo.feedback.register({
            topic_code: '1',
            message: form.question!,
            sender_name: form.name,
            sender_email: form.email,
        });
        await this.asyncSetState({ isSuccess: true, name: form.name });
    } catch (e) {
        globalError(e);
    }
};

export default sendForm;
