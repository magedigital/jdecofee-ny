import { ProfilePatch } from '@promoinstance/sdk';

import { promo } from '@/src/index.tsx';
import checkAuth from '@/src/utils/checkAuth.ts';
import { setError } from '@/src/views/root/components/errors/utils/errorHandler.ts';

import I from '../types.ts';

const sendForm: I['sendForm'] = async function (d) {
    const data: ProfilePatch = {
        first_name: d.firstName,
        last_name: d.lastName,
        third_name: d.thirdName,
        phone: d.phone ? `+${d.phone.replace(/\D/gi, '')}` : undefined,
        mailing: d.mailing ? '1' : undefined,
    };

    if (!d.personal) {
        setError({ text: 'Необходимо согласие', type: 'error' });
        return;
    }

    if (d.password && !d.password2) {
        setError({ text: 'Необходимо повторить пароль', type: 'error' });
        return;
    }

    if (d.password && d.password2 && d.password !== d.password2) {
        setError({ text: 'Пароли должны совпадать', type: 'error' });
        return;
    }

    try {
        if ((Object.keys(data) as (keyof typeof data)[]).some((k) => !!data[k])) {
            await promo.profile.updateProfile(data);
        }
        if (d.password) {
            await promo.auth.setPassword(d.password);
        }
    } catch (e) {
        return Promise.reject(e);
    }

    // if (appStore.getState().authUser) {
    //     sendGoal('regComplete', true);
    // }

    await checkAuth({ redirect: true });
};

export default sendForm;
