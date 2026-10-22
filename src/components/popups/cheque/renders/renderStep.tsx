import React from 'react';

import Final from '../components/final/Final.tsx';
import Form from '../components/form/Form.tsx';
import Scan from '../components/scan/Scan.tsx';
import ScanError from '../components/scanError/ScanError.tsx';
import Start from '../components/start/Start.tsx';

import I from '../types.ts';

const renderStep: I['renderStep'] = function (id) {
    const { mode } = this.state;

    return (
        <div className="popup__step">
            {id === 'start' && (
                <Start
                    setStep={this.setStep.bind(this)}
                    uploadQRCode={this.uploadQRCode.bind(this)}
                />
            )}
            {id === 'scan' && (
                <Scan setStep={this.setStep.bind(this)} setQRCode={this.setQRCode.bind(this)} />
            )}
            {id === 'scanError' && (
                <ScanError
                    setStep={this.setStep.bind(this)}
                    uploadQRCode={this.uploadQRCode.bind(this)}
                />
            )}
            {id === 'form' && (
                <Form
                    scanData={this.scanData}
                    setStep={this.setStep.bind(this)}
                    updateListRender={async () => {
                        await this.asyncSetState({ updateListRenderKey: new Date().getTime() });
                    }}
                    mode={mode}
                />
            )}
            {id === 'final' && <Final setStep={this.setStep.bind(this)} />}
        </div>
    );
};

export default renderStep;
