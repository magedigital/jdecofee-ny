import React from 'react';
import ReactDOM from 'react-dom/client';

import {
    AuthModule,
    FeedbackModule,
    PrizesModule,
    ProfileModule,
    PromoInstance,
    RafflesModule,
    ReceiptsModule,
    ResourcesModule,
} from '@promoinstance/sdk';

import initPages from '@/src/services/router/utils/initPages.ts';

import Router from './services/router/Router.ts';
import { appStore } from './store/store.tsx';
import Root from './views/root/Root.tsx';

const promo = new PromoInstance({
    baseUrl: '/api/v1',
    timeoutMs: 30_000,
    requestCredentials: 'include',
});
promo.use(new AuthModule());
promo.use(new ProfileModule());
promo.use(new ResourcesModule());
promo.use(new FeedbackModule());
promo.use(new ReceiptsModule());
promo.use(new RafflesModule());
promo.use(new PrizesModule());

const resultPages = initPages();

const AppRouter = new Router();
const path = AppRouter.getStartUrl(window.location.pathname.slice(1));

(async () => {
    const { storePages, levels, pagesIds, showPages } = AppRouter.changePage({
        href: path,
        storePages: resultPages,
        start: true,
    })!;

    if (levels?.[0]) {
        (document.querySelector('body') as HTMLElement).classList.add(`_${levels[0]}`);
    }

    appStore.getState().setLevels(levels!);
    appStore.getState().setPages(storePages!);
    appStore.getState().setPagesIds(pagesIds!);
    appStore.getState().setShowPages(showPages!);
    appStore.getState().rootInit();
})();

const loads: {
    event?: boolean;
    fonts?: boolean;
} = {};

const checkLoad = () => {
    if (loads.event && loads.fonts) {
        setTimeout(() => {
            appStore.getState().windowLoad();
        }, 10);
    }
};

document.fonts.ready.then(() => {
    setTimeout(() => {
        loads.fonts = true;

        checkLoad();
    }, 10);
});

export const rootPromises: Record<'load', Promise<void>> = {} as any;

rootPromises.load = new Promise((r) => {
    window.onload = () => {
        setTimeout(() => {
            const style = document.querySelector('.initStyle');

            if (style) {
                style.remove();
            }

            loads.event = true;

            checkLoad();
            appStore.getState().setLoadImage();
            r();
        }, 10);
    };
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(<Root />);

export { AppRouter, promo };
