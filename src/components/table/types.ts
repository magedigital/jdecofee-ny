import DefaultI from '@/src/components/default/types';
import { ListRenderPropsT } from '@/src/components/list/types';

type PropsT = {
    name: string;
    rows: ({ id: string } & ObjT)[];
    cols: Record<string, { title: string; width: number }>;
    render: TableRenderRowT;
    isMobRows?: boolean;
    emptyId?: string;
    renderEmpty?: TableRenderEmptyT;
    renderListCb?: () => void;
    loading?: boolean;
};

type TableRenderRowT<T = any, K = any> = (d: { row: T; name: K }) => React.ReactNode;
type TableRenderEmptyT = (d: { id: string }) => React.ReactNode;

type StateT = {};

interface TableI extends DefaultI<PropsT, StateT> {
    getColWidth(this: TableI, name: string): number;

    renderHead(this: TableI): React.ReactNode;
    renderContent(this: TableI): React.ReactNode;
    renderRow(this: TableI, data: ListRenderPropsT<any>): React.ReactNode;
}

export default TableI;
export type { TableRenderRowT, TableRenderEmptyT };
