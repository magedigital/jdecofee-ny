import { RaffleListItem, RaffleWinnerItem } from '@promoinstance/sdk';

import DefaultI from '@/src/components/default/types';
import { TableRenderEmptyT, TableRenderRowT } from '@/src/components/table/types';

import { winnerTableCols } from './static/table';

type PropsT = {};

type StateT = {
    searchWeek?: string;
    searchPhone?: string;
    raffles?: RaffleListItem[];
    winners?: RaffleWinnerItem[];
    hasMore?: boolean;
    page: number;
    isLoading?: boolean;
};

interface HeaderI extends DefaultI<PropsT, StateT> {
    setWeek(this: HeaderI, id: string): Promise<void>;
    setPhone(this: HeaderI, id: string): Promise<void>;

    getWinners(this: HeaderI, f?: boolean): Promise<void>;

    renderTableCol: TableRenderRowT<RaffleWinnerItem, keyof typeof winnerTableCols>;
    renderTableEmpty: TableRenderEmptyT;

    renderHead(this: HeaderI): React.ReactNode;
    renderBar(this: HeaderI): React.ReactNode;
    renderTable(this: HeaderI): React.ReactNode;
}

export default HeaderI;
