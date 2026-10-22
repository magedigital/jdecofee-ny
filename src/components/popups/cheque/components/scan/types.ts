import DefaultI from '@/src/components/default/types';

import ChequePopupI from '../../types';

type PropsT = {
    setStep: ChequePopupI['setStep'];
    setQRCode: ChequePopupI['setQRCode'];
};

type StateT = {
    videoReady?: boolean;
    loadingKey?: string;
};

interface ChequeScanI extends DefaultI<PropsT, StateT> {
    video: React.RefObject<HTMLVideoElement | null>;

    flagTick?: boolean;
    isComplete?: boolean;

    videoStart(this: ChequeScanI): Promise<void>;
    videoStop(this: ChequeScanI): Promise<void>;
    setFrame(this: ChequeScanI): Promise<void>;
}

export default ChequeScanI;
