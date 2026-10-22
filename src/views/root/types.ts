import DefaultI from '@/src/components/default/types.ts';
import { PopupsT } from '@/src/store/popups.ts';

import { StoreT } from '../../store/store.tsx';

type PropsT = {
    isRootInit: StoreT['isRootInit'];
    isCookiesShow: StoreT['isCookiesShow'];
    currentPopup: StoreT['currentPopup'];
    pages: StoreT['pages'];
} & PopupsT;

type StateT = {};

interface RootI extends DefaultI<PropsT, StateT> {
    resizeHandler(this: RootI, force?: boolean): Promise<void>;
    init(this: RootI): Promise<void>;
    popupsHandler(this: RootI, set?: boolean): void;
    changePageListener(this: RootI, e: CustomEvent<{ isPopstate?: boolean }>): void;
    getMetaTitle(this: RootI): string | undefined;

    renderPopups(this: RootI): React.ReactNode;
    renderCookies(this: RootI): React.ReactNode;
}

export default RootI;
