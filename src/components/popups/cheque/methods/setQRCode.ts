import I from '../types.ts';

import parseQRCode from '../utils/parseQRCode.ts';

const setQRCode: I['setQRCode'] = async function (this: I, { data, mode }) {
    const scanData = parseQRCode(data);

    if (!scanData) {
        this.setStep('scanError');

        return;
    }

    this.scanData = scanData;

    await this.setStep('form', mode);
};

export default setQRCode;
