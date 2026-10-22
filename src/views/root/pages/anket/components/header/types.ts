import DefaultI from '@/src/components/default/types';
import { ProfileT, StoreT } from '@/src/store/store';

type PropsT = {
    authUser: ProfileT;
    mainContent: StoreT['mainContent'];
};

type StateT = {};

interface HeaderI extends DefaultI<PropsT, StateT> {
    getUserData(this: HeaderI): Partial<Record<string, string>>;

    sendForm(this: HeaderI, d: Partial<Record<string, string>>): Promise<void>;
}

export default HeaderI;
