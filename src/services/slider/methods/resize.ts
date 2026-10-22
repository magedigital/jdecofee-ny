import I from '../types.ts';

const resize: I['resize'] = function () {
    if (this.resizeTimerId) {
        clearTimeout(this.resizeTimerId);
    }

    this.resizeTimerId = setTimeout(() => {
        this.resizeHandler();
    }, 100);
};

export default resize;
