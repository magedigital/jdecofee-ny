import I from '../types.ts';

const init: I['init'] = async function (this: I) {
    document.addEventListener<any>('setError', this.errorHandler);

    this.unmountHandlers.all = () => {
        document.removeEventListener<any>('setError', this.errorHandler);
    };

    (Object.keys(this.timers) as (keyof typeof this.timers)[]).forEach((key) => {
        clearTimeout(this.timers[key]);
    });
};

export default init;
