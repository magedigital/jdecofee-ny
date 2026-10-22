import { codeRequests } from '@/src/api/requests/code.ts';

import I from '../types.ts';

const sendForm: I['sendForm'] = async function () {
    const { form } = this.state;
    const { setStep } = this.props;

    if (!form) {
        return;
    }

    await this.asyncSetState({ loadingKey: 'send' });

    try {
        await codeRequests.reg({ code: form.code! });
        await setStep('final');
    } catch (e) {}

    await this.asyncSetState({ loadingKey: undefined });
};

export default sendForm;
