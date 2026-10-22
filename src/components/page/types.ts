import { UIEvent } from 'react';

import DefaultI from '@/src/components/default/types';

type PropsT = {};

type StateT = {
    isFixBarShow?: boolean;
    isInit?: boolean;
    isMenuShow?: boolean;
    isCloseMove?: boolean;
    isPopupShow?: boolean;
    isLightMode?: boolean;
};

interface PageI<P = {}, S = {}> extends DefaultI<PropsT & P, StateT & S> {
    isFixBarShow?: boolean;
    isCloseMove?: boolean;
    pageName?: string;
    savedPrevPageUrl?: string;
    mode?: 'inner';
    scrollData?: Partial<Record<'3' | '6' | '9', true>>;

    checkScroll(this: PageI, e: UIEvent): Promise<void>;
    close(this: PageI): Promise<void>;

    pageInit?: () => Promise<void>;
    setMenuState(s: boolean): Promise<void>;

    renderPage(
        this: PageI,
        data: {
            render: () => React.ReactNode;
            renderOutside?: () => React.ReactNode;
            renderTopInfo?: () => React.ReactNode;
            className?: string;
            withClose?: boolean;
        },
    ): React.ReactNode;
    renderInnerClose(this: PageI): React.ReactNode;
}

export default PageI;
