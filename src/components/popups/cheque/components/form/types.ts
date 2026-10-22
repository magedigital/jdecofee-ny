import { ChangeEvent } from 'react';

import EditorI from '@/src/components/editor/types';

import ChequeI, { ChequeModesT, ChequeScanDataT } from '../../types';
import { chequeFormFields } from './static/fields';

type PropsT = {
    setStep: ChequeI['setStep'];
    updateListRender: () => Promise<void>;
    scanData?: ChequeScanDataT;
    mode: ChequeModesT | undefined;
};

type StateT = {
    files: { src: string; id: string }[];
    loadingKey?: string;
    form?: Partial<Record<keyof typeof chequeFormFields, string>>;
};

interface ChequeFormI extends EditorI<PropsT, StateT> {
    files: Record<string, File>;

    uploadFile(this: ChequeFormI, e: ChangeEvent<HTMLInputElement>): Promise<void>;
    deleteFile(this: ChequeFormI, id: string): Promise<void>;

    sendForm(this: ChequeFormI): Promise<void>;

    renderFields(this: ChequeFormI): React.ReactNode;
    renderUploadField(this: ChequeFormI): React.ReactNode;
    renderFoot(this: ChequeFormI): React.ReactNode;
}

export default ChequeFormI;
