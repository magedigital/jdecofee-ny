import DefaultI from '@/src/components/default/types';
import { ProfileT } from '@/src/store/store';

type PropsT = {
    authUser: ProfileT;
};

type StateT = {
    error?: ErrorT;
    refreshKey?: string;
};

interface HeaderI extends DefaultI<PropsT, StateT> {
    formData: FormData;

    sendForm(this: HeaderI, d: Partial<Record<string, string>>): Promise<void>;
    downloadAkt(this: HeaderI): Promise<void>;
    resetAkt(this: HeaderI): Promise<void>;

    getPrizeId(this: HeaderI): string | undefined;
}

export default HeaderI;
