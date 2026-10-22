import { promo } from '@/src/index.tsx';
import { globalError } from '@/src/utils/globalError.ts';

import I from '../types.ts';

// const sendCRAGoal = (type: string) => {
//     const utmSource = localStorage.getItem('2026utmSource');
//     if (utmSource !== 'winbox' && utmSource !== 'advcake') {
//         return;
//     }
//     window.advcake_data = window.advcake_data || [];
//     window.advcake_data.push({
//         pageType: 6,
//         user: {
//             email: v4(),
//             type,
//         },
//         leadInfo: {
//             id: 'e9adccc96c051de0ae5997a3bd624b36',
//             leadid: '1',
//             name: 'Регистрация чека',
//             totalPrice: 0,
//             coupon: 'NO',
//         },
//     });
// };

const sendForm: I['sendForm'] = async function () {
    const { form } = this.state;

    if (!form) {
        return;
    }

    const { setStep, mode } = this.props;

    const date = new Date();

    if (form.date) {
        const [day, month] = form.date.split('.');
        date.setMonth(+month - 1);
        date.setDate(+day);
    }

    if (form.time) {
        const [hour, min] = form.time.split(':');
        date.setHours(+hour);
        date.setMinutes(+min);
    }

    date.setUTCMinutes(date.getUTCMinutes() - date.getTimezoneOffset());

    // if (checkChatbot()) {
    //     this.formData.set('interface', 'tg-bot');
    // }

    await this.asyncSetState({ loadingKey: 'send', error: undefined });

    try {
        const r = await promo.receipts.register({
            fn: form.fn!,
            fd: form.fd!,
            fp: form.fp!,
            sum: form.amount!,
            load_type: mode! ?? 'typing',
            interface: 'site',
            date: date.toISOString().split('.')[0],
            photos: Object.keys(this.files).map((i) => this.files[i]),
        });

        // const isSend = sendGoal('regCheckSuccess', true);

        setStep('final');

        document.dispatchEvent(new CustomEvent('getProfileContent'));

        if (r?.is_first_receipt) {
            // sendGoal('regFirstCheck', true);
        }

        // sendCRAGoal(r?.isFirstCheck ? 'new' : 'old');
    } catch (e) {
        globalError(e);

        // sendGoal('regCheckError', true);
    }

    await this.asyncSetState({ loadingKey: undefined });
};

export default sendForm;
