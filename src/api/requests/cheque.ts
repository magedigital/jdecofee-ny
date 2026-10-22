import { API } from '@/src/api/api';
import request from '@/src/utils/request';

async function regCheque({ data }: { data: FormData }): Promise<{ isFirstCheck?: boolean }> {
    const response = await request<{ isFirstCheck?: boolean }>({
        method: 'POST',
        url: API.CHEQUE.SEND_FORM,
        data,
    });

    return response.data;
}

async function order({ prize }: { prize: string }): Promise<void> {
    await request({
        method: 'POST',
        url: API.CHEQUE.ORDER,
        data: { prize },
    });
}

export const chequeRequests = {
    regCheque,
    order,
};
