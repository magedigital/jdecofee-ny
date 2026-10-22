import { enums } from '@/src/global/enums';
import { PageNamesT } from '@/src/services/router/static/pages';
import { ProfileT, appStore } from '@/src/store/store';

import { AppRouter, promo } from '..';

export const logoutHandler = async function (): Promise<void> {
    window.userAuthorized = false;
    appStore.getState().setAuthProcess(true);

    promo.clearToken();

    localStorage.removeItem(enums.USER);

    if (window.isBot) {
        if (window.Telegram?.WebApp) {
            window.Telegram.WebApp.close();
        }

        return;
    }

    AppRouter.changePage({ pageName: 'index' });
    appStore.getState().setPopup({ name: 'loginPopup' });

    setTimeout(async () => {
        appStore.getState().setAuthUser(undefined);
    }, 300);
};

type ParamsT = {
    redirect?: boolean;
};

export default async function checkAuth({ redirect }: ParamsT): Promise<ProfileT | undefined> {
    const token = promo.getToken();

    if (!token) {
        if (localStorage.getItem(enums.USER)) {
            await logoutHandler();
        }

        if (localStorage.getItem('forgetEmail')) {
            // await changePage({ pageName: 'forget' });
        }

        return;
    }

    let user;

    try {
        user = (await promo.profile.getProfile()) as ProfileT;
    } catch (e) {
        await logoutHandler();

        return;
    }

    if (!user) {
        await logoutHandler();

        return;
    }

    window.profileDataPromise = new Promise((resolve) => {
        try {
            resolve();
            // authRequests.getInfo().then(() => {
            //     resolve();
            // });
        } catch (e) {
            resolve();
        }
    });

    await window.profileDataPromise;

    if (user.phone && user.phone.length === 11) {
        user.phone = user.phone.slice(1);
    }

    appStore.getState().setAuthUser(user);
    window.userAuthorized = true;
    localStorage.setItem(enums.USER, JSON.stringify(user));

    let pageName: PageNamesT | undefined;
    let ids: Record<string, string> | undefined;

    if (user?.status === 'ANKET_REQUIRED') {
        pageName = 'anket';
    } else if (user?.status === 'EXTRA_ANKET_REQUIRED') {
        pageName = 'fullAnket';
    }

    // if (user?.status === 'ACT_REQUIRED' && user.nextActPrizeId) {
    //     pageName = 'akt-inner';
    //     ids = { '1': user.nextActPrizeId };
    // }

    if (redirect && !pageName) {
        pageName = 'profile';
    }

    if (pageName) {
        AppRouter.changePage({ pageName, ids, saveSearch: !!window.isBot });
    }

    if (!window.isBot && user?.status === 'EMAIL_CONFIRM_REQUIRED') {
        appStore.getState().setPopup({ name: 'regPopup' });
    }

    return user;
}
