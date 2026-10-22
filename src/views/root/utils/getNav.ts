import { AppRouter } from '@/src';
import { PageNamesT } from '@/src/services/router/static/pages';
import { appStore } from '@/src/store/store';
import getLocation from '@/src/utils/getLocation';
import scrollToBlock from '@/src/utils/scrollToBlock';

type NavItemT = {
    text: string;
    name: string;
    type: 'ancor' | 'link' | 'href';
    ancorName?: string;
    pageName?: PageNamesT;
    href?: string;
    ancor?: string;
    goal?: string;
};

export const getNav = (): NavItemT[] => {
    const nav: NavItemT[] = [];

    nav.push({
        text: 'ГЛАВНАЯ',
        name: 'index',
        type: 'ancor',
        ancor: 'index',
        ancorName: 'index',
    });
    nav.push({
        text: 'как участвовать',
        name: 'rules',
        type: 'ancor',
        ancor: 'rules',
        ancorName: 'rules',
    });
    nav.push({
        text: 'Призы',
        name: 'prizes',
        type: 'ancor',
        ancor: 'prizes',
        ancorName: 'prizes',
    });
    nav.push({
        text: 'победители',
        name: 'winners',
        type: 'link',
        pageName: 'winners',
    });
    nav.push({
        text: 'вопрос-ответ',
        name: 'faq',
        type: 'link',
        pageName: 'faq',
    });

    return nav;
};

export const onNav = (d: { parent: HTMLElement; item: NavItemT }): void => {
    const { item } = d;
    const scrollNode = d.parent.closest('.page')!.querySelector<HTMLElement>('.page__scroll');
    const topBarNode = d.parent.closest('.page')!.querySelector<HTMLElement>('.topBar');
    const showPages = appStore.getState().showPages;

    if (!scrollNode) {
        return;
    }

    if (item.type === 'ancor') {
        const { search } = getLocation();
        const ancorName = item.ancorName;

        if (search.ancor !== ancorName) {
            if (showPages.includes('index')) {
                const blockNode = document.querySelector<HTMLElement>(
                    `[data-ancor="${ancorName}"]`,
                );

                if (blockNode) {
                    scrollToBlock({
                        blockNode,
                        scrollNode,
                        offset: -(topBarNode?.offsetHeight ?? 0),
                    });
                }
            }

            AppRouter.changePage({
                pageName: 'index',
                search: ancorName !== 'index' ? [{ name: 'ancor', value: ancorName! }] : undefined,
            });
        }
    }

    if (item.type === 'link') {
        AppRouter.changePage({ pageName: item.pageName! });
    }
};
