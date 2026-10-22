import I from '../types.ts';

import scanQRCode from '../utils/scanQRCode.ts';

const uploadQRCode: I['uploadQRCode'] = async function (this: I, { target }) {
    try {
        const data = await scanQRCode({ target });
        await this.setQRCode({ data, mode: 'qr' });
    } catch (error) {
        this.setStep('scanError');
    }
};

export default uploadQRCode;
