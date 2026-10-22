import { promo } from '@/src/index.tsx';
import { appStore } from '@/src/store/store.tsx';
import checkAuth from '@/src/utils/checkAuth.ts';

import { MainContentT } from '../pages/index/types.ts';
import I from '../types.ts';

window.visibillityHandlers = {};

const init: I['init'] = async function () {
    const rootJWT = document.querySelector('#root')!.getAttribute('data-jwt');

    if (rootJWT) {
        promo.setToken(rootJWT);
    }

    window.getJWT = () => promo.getToken() || undefined;
    window.saveJWT = (t) => promo.setToken(t);

    window.userAuthorized = !!promo.getToken();

    this.resizeHandler(true);

    document.body.style.setProperty('--mediaM', `${window.mediaM}px`);

    window.addEventListener('resize', () => {
        this.resizeHandler();
    });

    this.popupsHandler(true);

    document.addEventListener('mouseenter', () => {
        Object.keys(window.visibillityHandlers).forEach((k) => {
            window.visibillityHandlers[k](true);
        });
    });

    document.addEventListener('mouseleave', () => {
        Object.keys(window.visibillityHandlers).forEach((k) => {
            window.visibillityHandlers[k](false);
        });
    });

    (document.addEventListener as CustomListenerT)('changePage', this.changePageListener);

    checkAuth({});

    try {
        const r = await promo.resources.getResources([
            'disclaimer',
            'privacy_policy',
            'rules',
            'personal_data_acceptance',
        ]);
        const mainContent: MainContentT = {
            footerDisclaimer: r.disclaimer?.value as string,
            docs: {
                rules: r.rules?.value as string,
                policy: r.privacy_policy?.value as string,
                personal: r.personal_data_acceptance?.value as string,
            },
        };

        appStore.getState().setMainContent(mainContent);
    } catch (e) {}
};

export default init;
