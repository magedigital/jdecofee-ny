import DefaultI from '@/src/components/default/types';
import PageI from '@/src/components/page/types';

type PropsT = {
    setState: PageI['setMenuState'];
};

type StateT = {};

interface MenuI extends DefaultI<PropsT, StateT> {
    renderTop(this: MenuI): React.ReactNode;
    renderNav(this: MenuI): React.ReactNode;
}

export default MenuI;
