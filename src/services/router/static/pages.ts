import { StoreT, appStore } from '../../../store/store';

const pages = {
    index: {
        links: ['', undefined],
        isPublic: true,
    },
    profile: {
        links: ['profile'],
        check: (s: StoreT) => {
            if (
                !s.authUser ||
                s.authUser.status === 'EMAIL_CONFIRM_REQUIRED' ||
                s.authUser.status === 'EXTRA_ANKET_REQUIRED'
            ) {
                let pageName = s.showPages.find((p) => (pages[p] as PageT).isPublic);

                if (s.authUser?.status === 'EMAIL_CONFIRM_REQUIRED') {
                    pageName = 'anket';
                }

                if (s.authUser?.status === 'EXTRA_ANKET_REQUIRED') {
                    pageName = 'fullAnket';
                }

                return {
                    pageName: pageName || 'index',
                    callback: !s.authUser
                        ? () => {
                              appStore.getState().setPopup({ name: 'loginPopup' });
                          }
                        : undefined,
                };
            }
        },
    },
    winners: {
        links: ['winners'],
    },
    faq: {
        links: ['faq'],
    },
    anket: {
        links: ['anket'],
    },
    fullAnket: {
        links: ['full-anket'],
    },
    akt: {
        links: ['akt'],
    },
    'akt-inner': {
        links: [],
        parentName: 'akt' as const,
        level: 1,
    },
    login: {
        links: ['login'],
    },
} as const;

type PageT = {
    links: readonly (string | undefined)[];
} & Partial<{
    level: number;
    parentName: PageNamesT;
    isPopup: boolean;
    content: string;
    group: string;
    className: string;
    isPublic: boolean;
    mainPage: string | ((data: StoreT) => string);
    check: (s: StoreT) => { pageName: PageNamesT; callback?: () => void } | undefined;
    withId: boolean;
    forBot: boolean;
}>;

type PageNamesT = keyof typeof pages;

export default pages;

export type { PageT, PageNamesT };
