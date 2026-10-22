import I from '../types.ts';

const videoStart: I['videoStart'] = async function () {
    this.flagTick = true;

    const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' },
    });

    this.video.current!.srcObject = stream;

    try {
        await this.video.current!.play();
    } catch (error) {}

    await this.asyncSetState({ videoReady: true });

    requestAnimationFrame(this.setFrame.bind(this));
};

export default videoStart;
