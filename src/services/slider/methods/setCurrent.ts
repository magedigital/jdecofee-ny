import I from '../types.ts';

const setCurrent: I['setCurrent'] = function () {
    this.moveToCurrentItem({ current: this.current, force: true });
};

export default setCurrent;
