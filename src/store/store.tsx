import { create } from 'zustand';
import { useShallow } from 'zustand/shallow';

import React from 'react';

import { Profile } from '@promoinstance/sdk';

import { getLocalContent } from '@/src/api/requests/content';
import { enums } from '@/src/global/enums';

import { PageNamesT } from '../services/router/static/pages';
import { MainContentT } from '../views/root/pages/index/types';
import { PopupsReducersT, PopupsT, createPopupsStore } from './popups';

type StorePagesT = {
    isShow: boolean;
    id?: string;
    data?: Record<string, any>;
};

export type ProfileT = Profile & {
    status:
        | 'PARTICIPANT'
        | 'ANKET_REQUIRED'
        | 'EXTRA_ANKET_REQUIRED'
        | 'EMAIL_CONFIRM_REQUIRED'
        | 'ACT_REQUIRED';
};

type StoreT = {
    device: 'mobile' | 'desktop';
    pages: Record<PageNamesT, StorePagesT>;
    showPages: PageNamesT[];
    prevPageUrl?: string;
    levels: string[];
    pagesIds: Record<string, number>;
    authUser?: ProfileT;
    isAuthCheck?: boolean;
    isRootInit: boolean;
    isWindowLoad: boolean;
    isCookiesShow: boolean;
    currentPopup?: keyof PopupsT;
    isAuthProcess?: boolean;
    mainContent?: MainContentT;
    isGameInit?: boolean;
    canLoadImage?: boolean;
} & PopupsT;

type ReducersT = {
    setDevice: (device: StoreT['device']) => void;
    setPages: (pages: StoreT['pages']) => void;
    setLevels: (levels: StoreT['levels']) => void;
    setPagesIds: (pagesIds: StoreT['pagesIds']) => void;
    setShowPages: (pages: StoreT['showPages']) => void;
    setPrevPageUrl: (url: string | undefined) => void;
    rootInit: () => void;
    windowLoad: () => void;
    setCookiesState: (s: boolean) => void;
    setAuthProcess: (s: boolean) => void;
    setAuthUser: (u: ProfileT | undefined) => void;
    setMainContent: (c: MainContentT) => void;
    gameInit: () => void;
    setLoadImage: () => void;
} & PopupsReducersT;

const appStore = create<StoreT & ReducersT>((set) => ({
    device: 'desktop',
    setDevice: (device) => set({ device }),
    pages: {} as StoreT['pages'],
    setPages: (pages) => set({ pages }),
    levels: [],
    setLevels: (levels) => set({ levels }),
    pagesIds: {},
    setPagesIds: (pagesIds) => set({ pagesIds }),
    prevPageUrl: undefined,
    setPrevPageUrl: (url) =>
        set({
            prevPageUrl: url
                ? url
                      .split('/')
                      .filter((p) => p)
                      .join('/')
                : undefined,
        }),
    showPages: [],
    setShowPages: (showPages) => set({ showPages }),
    isRootInit: false,
    rootInit: () => set({ isRootInit: true }),
    isWindowLoad: false,
    windowLoad: () => set({ isWindowLoad: true }),
    isCookiesShow: !localStorage.getItem('isCookiesShow'),
    setCookiesState: (isCookiesShow) => {
        set({ isCookiesShow });

        if (isCookiesShow === false) {
            localStorage.setItem('isCookiesShow', 'true');
        }
    },
    setAuthProcess: (isAuthProcess) => set({ isAuthProcess }),
    authUser: (() => {
        const localUser = localStorage.getItem(enums.USER);

        if (localUser) {
            return JSON.parse(localUser) as ProfileT;
        }
    })(),
    setAuthUser: (authUser) => set({ authUser, ...(authUser ? { isAuthCheck: true } : {}) }),
    mainContent: getLocalContent('main'),
    setMainContent: (c) => set({ mainContent: c }),
    gameInit: () => set({ isGameInit: true }),
    setLoadImage: () => set({ canLoadImage: true }),
    ...createPopupsStore(set),
}));

const WithStore = function <
    T extends React.JSXElementConstructor<any>,
    M extends Partial<React.ComponentProps<T>>,
>(Target: T, mapState: (state: StoreT) => M) {
    return function WithStoreComponent(props: Omit<React.ComponentProps<T>, keyof M>) {
        const store = appStore(useShallow(mapState));
        const TargetComponent = Target as any;

        return <TargetComponent {...props} {...store} />;
    };
};

export { WithStore, appStore };
export type { StoreT };
