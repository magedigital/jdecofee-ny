import { API } from '@/src/api/api';
import request from '@/src/utils/request';

async function send({
    data,
}: {
    data: Partial<{
        firstName: string;
        lastName: string;
        secondName: string;
        phone: string;
        agreement: boolean;
        mailing: string;
        password1: string;
        password2: string;
    }>;
}): Promise<void> {
    await request({
        method: 'POST',
        url: API.ANKET.SEND,
        data,
    });
}

async function upload({ file, name }: { file: File; name: string }): Promise<void> {
    const formData = new FormData();

    formData.append('file', file);
    formData.append('fileName', name);

    await request({
        method: 'POST',
        url: API.ANKET.UPLOAD,
        data: formData,
    });
}

async function getAkt({ id }: { id: string }): Promise<{ pdf: string }> {
    const r = await request<{ pdf: string }>({
        method: 'POST',
        url: API.ANKET.GET_AKT,
        data: {
            userPrizeId: id,
        },
    });

    return r.data;
}

async function resetAkt(): Promise<void> {
    await request({
        method: 'POST',
        url: API.ANKET.RESET_AKT,
    });
}

async function sendAkt(f: FormData): Promise<void> {
    await request({
        method: 'POST',
        url: API.ANKET.SEND_AKT,
        data: f,
    });
}

export const anketRequests = {
    send,
    upload,
    getAkt,
    resetAkt,
    sendAkt,
};
