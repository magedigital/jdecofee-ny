import DefaultI from '@/src/components/default/types';

type PropsT = {
    fileName?: string;
    onChange: (d: { file: File }) => Promise<void>;
    disabled?: boolean;
};

type StateT = {
    isOver?: boolean;
};

interface UploadI extends DefaultI<PropsT, StateT> {
    uploadHandler(this: UploadI, d: { file: File }): Promise<void>;

    renderMain(this: UploadI): React.ReactNode;
    renderResult(this: UploadI): React.ReactNode;
    renderOver(this: UploadI): React.ReactNode;
    renderLoading(this: UploadI): React.ReactNode;
}

export default UploadI;
