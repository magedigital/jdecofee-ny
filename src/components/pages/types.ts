import DefaultI from '@/src/components/default/types';
import ListI from '@/src/components/list/types';

import { PageNamesT, PageT } from '../../services/router/static/pages';
import { StoreT } from '../../store/store';

type PageRenderDataT = { id?: string; setRenderKey?: () => void; disabled?: boolean };

type PropsT = {
    context: React.Component;
    pages: Record<string, { render: (data: PageRenderDataT) => React.ReactNode }>;
    storePages: StoreT['pages'];
    filter: (page: PageNamesT) => boolean;
    parentClass?: string;
    itemClass?: string;
    pagesClass?: string;
    pageClass?: string;
    parentName?: PageNamesT;
    renderKey?: string;
    render404?: () => React.ReactNode;
    pagesOrder?: string[];
} & Partial<
    Pick<
        ListI['props'],
        | 'parentStyleProps'
        | 'parentRealStyleProps'
        | 'minHeight'
        | 'name'
        | 'notEmptySize'
        | 'testMode'
        | 'resizeWidth'
        | 'resizeHeight'
    >
>;

type StateT = {
    pages: PageNamesT[];
    renderKey?: string;
};

type ThisPageT = { _id: string; pageName: PageNamesT; id?: string } & PageT;

interface PagesI extends DefaultI<PropsT, StateT> {
    init(this: PagesI): Promise<void>;
    getPages(this: PagesI, all?: boolean): ThisPageT[];
}

export default PagesI;
export type { ThisPageT, PageRenderDataT };
