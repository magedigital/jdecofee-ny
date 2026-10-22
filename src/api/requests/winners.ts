import { API } from '@/src/api/api';
import request from '@/src/utils/request';

type WinnersDataT = {
    raffles: {
        ended: boolean;
        from: string;
        id: string;
        name: string;
        publish: string;
        to: string;
    }[];
    winners: WinnerT[];
};

type WinnerT = {
    email: string;
    phone: string;
    prize: string;
    publish: string;
    raffleId: string;
    id: string;
};

async function getList(): Promise<WinnersDataT> {
    const r = await request<WinnersDataT>({
        method: 'GET',
        url: API.WINNERS.GET_LIST,
    });

    r.data.winners.forEach((w, i) => {
        w.id = i.toString();
    });

    return r.data;
}

export const winnersRequests = {
    getList,
};
export type { WinnersDataT, WinnerT };
