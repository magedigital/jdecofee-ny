import { PrizeListItem, ReceiptListItem } from '@promoinstance/sdk';

import { FooterContentT } from '@/src/api/requests/content';
import PageI from '@/src/components/page/types';
import { TableRenderRowT } from '@/src/components/table/types';
import { StoreT } from '@/src/store/store';

import { chequesTableCols } from './static/table';

type PropsT = {
    authUser: StoreT['authUser'];
};

type StateT = {
    loadingKey?: string;
    pagesRenderKey?: string;
    isReady?: boolean;
    receipts?: ReceiptListItem[];
    prizes?: PrizeListItem[];
};

type ProfilePrizeT = {
    id: string;
    title: string;
    url: string;
    thumb: string;
    code: string;
    status: 'DOWNLOAD' | 'SENDING' | 'SENT' | 'DATA_NEEDED' | 'NEED_CODE';
    statusTitle: string;
    extraTitle: null | string;
    count: number;
    promoCode?: string;
    expired?: string;
};

type ProfileDataT = {
    works: WorkT[];
    prizes: ProfilePrizeT[];
    checks: {
        id: string;
        date: string;
        fd: string;
        points: number;
        status: string;
        statusCode: string;
        result: string;
    }[];
};

type WorkT = {
    id: string;
    date: string;
    comment: string;
    title: string;
    votes: number;
    thumb: string;
    gif: string;
    statusCode: 'converting' | 'uploading' | 'processing' | 'accepted' | 'refused' | 'checking';
    statusTitle: string;
    video?: string;
};

type ProfileContentT = {
    components: {
        footer: FooterContentT;
    };
};

interface ProfileI extends PageI<PropsT, StateT> {
    props: PropsT;
    state: StateT;

    parent: React.RefObject<HTMLDivElement | null>;

    renderContent(this: ProfileI): React.ReactNode;
    renderHead(this: ProfileI): React.ReactNode;
    renderMain(this: ProfileI): React.ReactNode;
    renderCheques(this: ProfileI): React.ReactNode;
    renderTableCol: TableRenderRowT<ReceiptListItem, keyof typeof chequesTableCols>;
    renderPrizes(this: ProfileI): React.ReactNode;
}

export default ProfileI;
export type { ProfileDataT, ProfileContentT, WorkT as ProfileWorkT, ProfilePrizeT };
