import EditorI from '@/src/components/editor/types';

import CodePopupI from '../../types';

type PropsT = {
    setStep: CodePopupI['setStep'];
};

type StateT = {
    form?: Partial<{ code: string }>;
};

interface StartI extends EditorI<PropsT, StateT> {
    sendForm(this: StartI): Promise<void>;
}

export default StartI;
