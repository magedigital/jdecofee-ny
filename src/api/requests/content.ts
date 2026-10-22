import { API } from '@/src/api/api';
import request from '@/src/utils/request';
import { ProfileContentT } from '@/src/views/root/pages/profile/types';

import { MainContentT } from '../../views/root/pages/index/types';

const version = 4;

type ContentNamesT = keyof typeof urls;
type ContentDatasT = {
    main: MainContentT;
    profile: ProfileContentT;
};

const urls = {
    main: 'MAIN',
    profile: 'PROFILE',
} as const;

export const setLocalContent = function (d: { name: ContentNamesT; data: any }): void {
    const localContentJson = localStorage.getItem(`content_v${version}`);
    let localContent: Record<string, ObjT> = {};

    if (localContentJson) {
        localContent = JSON.parse(localContentJson);
    } else {
        localContent = {};
    }

    localContent[d.name] = d.data;
    localStorage.setItem(`content_v${version}`, JSON.stringify(localContent));
};

export const getLocalContent = function <T extends ContentNamesT>(
    n: T,
): ContentDatasT[T] | undefined {
    const localContentJson = localStorage.getItem(`content_v${version}`);
    let localContent: Record<string, ObjT> | undefined;

    try {
        if (localContentJson) {
            localContent = JSON.parse(localContentJson);
        }

        if (localContent) {
            return localContent[n] as ContentDatasT[T];
        }
    } catch (e) {}
};

async function getContent<T extends ContentNamesT>({
    name,
}: {
    name: T;
}): Promise<ContentDatasT[T]> {
    const response = await request<ContentDatasT[T]>({
        method: 'GET',
        url: API.CONTENT[urls[name]],
    });
    setLocalContent({ name, data: response.data });

    return response.data;
}

export const contentRequests = {
    getContent,
};

type HeaderContentT = {
    menu: {
        item1: {
            title: string;
            url: string;
        };
        item2: {
            title: string;
            url: string;
        };
        item3: {
            title: string;
            url: string;
        };
        item4: {
            title: string;
            url: string;
        };
        item5: {
            title: string;
            url: string;
        };
        item6: {
            title: string;
            url: string;
        };
    };
    buttons: {
        button1: {
            title: string;
            url: string;
        };
        button2: {
            title: string;
            url: string;
        };
        button3: {
            title: string;
            url: string;
        };
    };
};

type FooterContentT = {
    url1: {
        title: string;
        url: string;
    };
    url2: {
        title: string;
        url: string;
    };
    url3: {
        title: string;
        url: string;
    };
    url4: {
        title: string;
        url: string;
    };
    disclaimer: {
        title: string;
        description: string;
    };
    disclaimer5ka: {
        title: string;
        description: string;
    };
    politics: {
        title: string;
        common: string;
        anket: string;
        feedback: string;
    };
};

export type { HeaderContentT, FooterContentT };
