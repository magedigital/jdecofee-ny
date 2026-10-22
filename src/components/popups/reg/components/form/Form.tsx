import React from 'react';

import Editor from '@/src/components/editor/Editor.tsx';
import { StoreT, WithStore } from '@/src/store/store.tsx';

import init from './methods/init.ts';
import sendForm from './methods/sendForm.ts';

import FormI from './types.ts';

import renderFoot from './renders/renderFoot.tsx';
import renderForm from './renders/renderForm.tsx';
import renderHead from './renders/renderHead.tsx';

class Form extends Editor<FormI['props'], FormI['state']> implements FormI {
    parent: FormI['parent'];

    constructor(props: FormI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    init = init;

    sendForm = sendForm;

    renderHead = renderHead;
    renderForm = renderForm;
    renderFoot = renderFoot;

    render() {
        return (
            <>
                {this.renderHead()}
                {this.renderForm()}
                {this.renderFoot()}
            </>
        );
    }
}

const mapStore = (s: StoreT) => ({
    mainContent: s.mainContent,
});

export default WithStore(Form, mapStore);
