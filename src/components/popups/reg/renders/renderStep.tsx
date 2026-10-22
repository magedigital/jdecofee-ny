import React from 'react';

import Code from '../components/code/Code.tsx';
import Form from '../components/form/Form.tsx';

import I from '../types.ts';

const renderStep: I['renderStep'] = function (s) {
    const { device } = this.props;

    if (s === 'form') {
        return (
            <Form
                device={device}
                setStep={this.setStep.bind(this)}
                updateListRender={async () => {
                    await this.asyncSetState({ updateListRenderKey: new Date().getTime() });
                }}
            />
        );
    }

    if (s === 'code') {
        return (
            <Code
                login={this.login!}
                mailService={this.mailService}
                device={device}
                updateListRender={async () => {
                    await this.asyncSetState({ updateListRenderKey: new Date().getTime() });
                }}
            />
        );
    }
};

export default renderStep;
