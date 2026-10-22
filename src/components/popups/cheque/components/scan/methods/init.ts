import I from '../types.ts';

const init: I['init'] = async function (this: I) {
    this.videoStart();

    this.unmountHandlers.all = () => {
        this.videoStop();
    };
};

export default init;
