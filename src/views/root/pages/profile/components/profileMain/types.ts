import DefaultI from '@/src/components/default/types';
import { StoreT } from '@/src/store/store';

type PropsT = {
    authUser: StoreT['authUser'];
};

type StateT = {};

interface ProfileMainI extends DefaultI<PropsT, StateT> {
    requestLogout(this: ProfileMainI): Promise<void>;
}

export default ProfileMainI;
