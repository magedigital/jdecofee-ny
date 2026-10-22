import I from '../types.ts';

const setStep: I['setStep'] = async function (this: I, s, d) {
    if (d) {
        this.login = d.login;
        this.mailService = d.mailService;
    }

    await this.asyncSetState({ currentStep: s });
};

export default setStep;
