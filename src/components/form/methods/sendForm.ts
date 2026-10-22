import { globalError } from '@/src/utils/globalError.ts';

import I from '../types.ts';

const sendForm: I['sendForm'] = async function () {
    const { form } = this.state;
    const { disabled } = this.props;

    if (disabled) {
        return;
    }

    if (!form) {
        return;
    }

    const { request } = this.props;

    await this.asyncSetState({ loadingKey: 'send', error: undefined });

    try {
        await request(form);
    } catch (e) {
        globalError(e);
    }

    await this.asyncSetState({ loadingKey: undefined });
};

export default sendForm;
