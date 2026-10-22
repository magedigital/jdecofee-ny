import { anketRequests } from '@/src/api/requests/anket.ts';
import { appStore } from '@/src/store/store.tsx';
import checkAuth from '@/src/utils/checkAuth.ts';

import I from '../types.ts';

import { AppRouter } from '../../../../../../../index.tsx';

const sendForm: I['sendForm'] = async function (d) {
    const id = this.getPrizeId();

    if (!id) {
        return;
    }

    await this.asyncSetState({ loadingKey: 'send' });

    this.formData.set('userPrizeId', id);

    if (d.policy) {
        this.formData.set('agreement', 'true');
    }

    try {
        await anketRequests.sendAkt(this.formData);

        await checkAuth({});

        const resultUser = appStore.getState().authUser;

        if (resultUser?.status === 'ACT_REQUIRED') {
            await this.asyncSetState({ refreshKey: new Date().getTime().toString() });
        } else {
            AppRouter.changePage({ pageName: 'profile' });
        }
        await this.asyncSetState({ loadingKey: undefined });
        return;
    } catch (e) {
        const error = e as ResponseErrorT;
        await this.asyncSetState.call(this, { error: error?.error });
    }

    await this.asyncSetState({ loadingKey: undefined });

    await checkAuth({ redirect: true });
};

export default sendForm;
