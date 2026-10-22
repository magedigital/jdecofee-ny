import { API } from '@/src/api/api';
import request from '@/src/utils/request';

async function login({
    ...data
}: {
    login: string | undefined;
    password: string | undefined;
    isCode?: boolean;
    confirmEmail?: boolean;
}): Promise<void> {
    await request<{ isFirstCheck?: boolean }>({
        method: 'POST',
        url: API.AUTH.LOGIN,
        data,
    });
}

async function botLogin({
    ...data
}: {
    login: string | undefined;
    password: string | undefined;
    isCode?: boolean;
}): Promise<void> {
    await request<{ isFirstCheck?: boolean }>({
        method: 'POST',
        url: API.AUTH.BOT_LOGIN,
        data,
    });
}

async function logout(): Promise<void> {
    await request({
        method: 'POST',
        url: API.AUTH.LOGOUT,
    });
}

async function registration({
    ...data
}: {
    login: string | undefined;
    mode?: string;
    confirmEmail?: boolean;
}): Promise<{ mailService?: string }> {
    const r = await request<{ mailService?: string }>({
        method: 'POST',
        url: API.AUTH.REGISTRATION,
        data,
    });

    return {
        mailService: r.data.mailService,
    };
}

async function botRegistration({
    ...data
}: {
    login: string | undefined;
    mode?: string;
    confirmEmail?: boolean;
}): Promise<{ mailService?: string }> {
    const r = await request<{ mailService?: string }>({
        method: 'POST',
        url: API.AUTH.BOT_REGISTRATION,
        data,
    });

    return {
        mailService: r.data.mailService,
    };
}

async function getUser(): Promise<{ user: any }> {
    const r = await request({
        method: 'GET',
        url: API.AUTH.GET_USER,
    });

    return {
        user: r.data,
    };
}

async function getInfo(): Promise<any> {
    const r = await request<any>({
        method: 'GET',
        url: API.AUTH.GET_INFO,
    });

    return r.data;
}

export const authRequests = {
    login,
    botLogin,
    logout,
    registration,
    botRegistration,
    getUser,
    getInfo,
};
