import I from '../types.ts';

const setCalcSize: I['setCalcSize'] = function () {
    if (!this.calcHeight) {
        return;
    }

    const { node, callback } = this.calcHeight;
    const currentItem = this.getItem(this.current);

    if (!currentItem) {
        return;
    }

    const itemHeight = currentItem.offsetHeight;

    node.style.height = `${itemHeight}px`;

    if (callback) {
        callback();
    }
};

export default setCalcSize;
