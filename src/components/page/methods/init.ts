import { StoreT, appStore } from '@/src/store/store.tsx';
import removeTransition from '@/src/utils/removeTransition.ts';

import I from '../types.ts';

const init: I['init'] = async function (this: I) {
    if (this.pageName) {
        const scrollKey = ['scroll', this.pageName].join('_');
        let scrollTop: number | string | null = localStorage.getItem(scrollKey);

        if (scrollTop) {
            scrollTop = +scrollTop;
        }

        if (scrollTop) {
            const pageScrollNode = this.parent.current!.querySelector<HTMLElement>('.page__scroll');

            if (pageScrollNode) {
                pageScrollNode.scrollTop = +scrollTop;
            }
        }
    }

    const { currentPopup } = appStore.getState();

    const setPopup = async (s: boolean | undefined) => {
        await this.asyncSetState({ isPopupShow: !!s });

        // this.parent.current!.querySelectorAll('a:not([data-check])').forEach((i) => {
        //     if (s) {
        //         i.setAttribute('data-href', i.getAttribute('href')!);
        //         i.removeAttribute('href');
        //     } else {
        //         i.setAttribute('href', i.getAttribute('data-href')!);
        //         i.removeAttribute('data-href');
        //     }
        // });
    };

    if (currentPopup) {
        await setPopup(true);
    }

    const changePopup = async (e: CustomEvent<{ currentPopup: StoreT['currentPopup'] }>) => {
        await setPopup(!!e.detail.currentPopup);
    };

    document.addEventListener<any>('changePopup', changePopup);

    this.unmountHandlers.store = () => {
        document.removeEventListener<any>('changePopup', changePopup);
    };

    if (this.pageInit) {
        this.pageInit();
    }

    removeTransition({ item: '.page__topBar' });
};

export default init;
