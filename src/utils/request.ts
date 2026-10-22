import axios, { AxiosError, AxiosRequestConfig } from 'axios';

import { setError } from '../views/root/components/errors/utils/errorHandler';

type RequestParamsT<T = ObjT> = {
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    url: string;
    data?: any;
    headers?: Record<string, string | undefined>;
    query?: { n: string; v: string | number | boolean }[];
    responseType?: AxiosRequestConfig['responseType'];
} & T;

const checkResponse = (d: any) => {
    if (!d) {
        return;
    }

    const { JWT } = d;

    if (JWT) {
        // setCookie(enums.ACCESS_TOKEN, JWT);
    }
};

type RequestErrorT = {
    errorText?: string;
};

export default async function request<T extends any>({
    method,
    url,
    data,
    headers,
    responseType,
}: RequestParamsT): Promise<{ result: string; data: T }> {
    const token = '';

    if (window.isBot && data) {
        data.fromChatBot = true;
    }

    try {
        const response = await axios({
            method,
            data,
            url: `${process.env.REACT_APP_API}/api${url}`,
            headers: {
                ...headers,
                ...(token ? { JWT: token } : {}),
                Authorization: `Basic ${btoa('dev:test9807')}`,
            },
            responseType,
        });

        checkResponse(response.data);

        return response.data;
    } catch (e) {
        const error = e as AxiosError;
        const errorData = error?.response?.data ?? error;

        checkResponse(error.response?.data);

        if (errorData) {
            if (errorData.errorText === 'Требуется авторизация' && token) {
                setError({ text: [errorData.errorText, '*'].join(''), type: 'error' });
            } else {
                setError({ text: errorData.errorText, type: 'error' });
            }
        }

        return Promise.reject(errorData);
    }
}

export type { RequestParamsT, RequestErrorT };
