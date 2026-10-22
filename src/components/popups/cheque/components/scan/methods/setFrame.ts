import jsQR from '@/src/plugins/QR';

import I from '../types.ts';

const setFrame: I['setFrame'] = async function () {
    const video = this.video.current;

    if (this.flagTick !== true || !video) {
        return;
    }

    if (video.readyState !== video.HAVE_ENOUGH_DATA) {
        requestAnimationFrame(this.setFrame.bind(this));

        return;
    }

    const canvas = this.parent.current!.querySelector('canvas');

    if (!canvas) {
        return;
    }

    const { setQRCode } = this.props;

    const canvasContext = canvas.getContext('2d')!;

    canvas.hidden = false;

    canvas.height = video.videoHeight;
    canvas.width = video.videoWidth;

    canvasContext.drawImage(video, 0, 0, canvas.width, canvas.height);

    const imageData = canvasContext.getImageData(0, 0, canvas.width, canvas.height);
    const qrDecoded = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: 'dontInvert',
    });

    if (qrDecoded) {
        if (qrDecoded.data) {
            if (!this.isComplete) {
                this.isComplete = true;

                setQRCode({ data: qrDecoded.data, mode: 'qr' });
            }
        } else {
            // this.setCurrentStep('error');
        }
    }

    requestAnimationFrame(this.setFrame.bind(this));
};

export default setFrame;
