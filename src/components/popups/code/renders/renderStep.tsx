import React from 'react';

import Final from '../components/final/Final.tsx';
import Start from '../components/start/Start.tsx';

import I from '../types.ts';

const renderStep: I['renderStep'] = function (id) {
    return (
        <div className="popup__step">
            {id === 'start' && <Start setStep={this.setStep.bind(this)} />}
            {id === 'final' && (
                <Final close={this.close.bind(this)} setStep={this.setStep.bind(this)} />
            )}
        </div>
    );
};

export default renderStep;
