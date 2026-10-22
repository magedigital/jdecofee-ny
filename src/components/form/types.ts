import EditorI from '@/src/components/editor/types';
import { FieldT } from '@/src/components/field/types';

type PropsT = {
    fields: Record<string, FieldT>;
    button: {
        text: string;
        className: string;
    };
    request: (d: Partial<Record<string, string>>) => Promise<void>;
} & Partial<{
    fieldsList: string[];
    fieldsKey: string;
    data: Partial<Record<string, string>>;
    uploadFile: (d: { file: File; name: string }) => Promise<void>;
    fieldClassName: string;
    requiredText: string;
    disabled: boolean;
}>;

type StateT = {
    form?: Partial<Record<string, string>>;
};

interface FormI extends EditorI<PropsT, StateT> {
    sendForm(this: FormI): Promise<void>;
}

export default FormI;
