import I from '../types.ts';

const setStep: I['setStep'] = async function (this: I, s, ...otherProps) {
    await this.asyncSetState({
        currentStep: s,
        ...(otherProps[0] ? { mode: otherProps[0] } : {}),
    });
};

export default setStep;
