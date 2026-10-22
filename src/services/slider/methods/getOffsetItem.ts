import I from '../types.ts';

const getOffsetItem: I['getOffsetItem'] = function (item) {
    return item.getBoundingClientRect().x - this.area.getBoundingClientRect().x;
};

export default getOffsetItem;
