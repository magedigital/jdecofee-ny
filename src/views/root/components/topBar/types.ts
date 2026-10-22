import DefaultI from '@/src/components/default/types';
import PageI from '@/src/components/page/types';

type PropsT = {
    mode?: 'popup' | 'inner' | 'menu';
    setMenuState: PageI['setMenuState'];
    pageCloseHandler?: () => void;
};

type StateT = {};

interface TopBarI extends DefaultI<PropsT, StateT> {
    renderNav(this: TopBarI): React.ReactNode;
}

export default TopBarI;
