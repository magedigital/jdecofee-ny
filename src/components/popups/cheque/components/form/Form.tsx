import React from 'react';

import Editor from '@/src/components/editor/Editor.tsx';

import deleteFile from './methods/deleteFile.ts';
import init from './methods/init.ts';
import sendForm from './methods/sendForm.ts';
import uploadFile from './methods/uploadFIle.ts';

import FormI from './types.ts';

import renderFields from './renders/renderFields.tsx';
import renderFoot from './renders/renderFoot.tsx';
import renderUploadField from './renders/renderUploadField.tsx';

class Form extends Editor<FormI['props'], FormI['state']> implements FormI {
    parent: FormI['parent'];

    constructor(props: FormI['props']) {
        super(props);
        this.state = {
            files: [],
        };

        this.parent = React.createRef();
    }

    files = {};

    init = init;

    uploadFile = uploadFile;
    deleteFile = deleteFile;
    sendForm = sendForm;

    renderFields = renderFields;
    renderUploadField = renderUploadField;
    renderFoot = renderFoot;

    render() {
        return (
            <>
                <div className="popup__head _COL _COL_H_CENTER">
                    <div className="popup__title">Регистрация чека</div>
                </div>
                {this.renderFields()}
                {this.renderUploadField()}
                {this.renderFoot()}
            </>
        );
    }
}

export default Form;
