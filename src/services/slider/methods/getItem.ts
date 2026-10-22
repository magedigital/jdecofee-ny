import I from '../types.ts';

const getItem: I['getItem'] = function (value, prop) {
    if (prop === 'key') {
        let offsetItem = Infinity;
        let resultItem;

        this.area
            .querySelectorAll<HTMLElement>(`.${this.itemClass}[data-key="${value}"]`)
            .forEach((item) => {
                if (this.getOffsetItem(item) >= 0 && this.getOffsetItem(item) < offsetItem) {
                    offsetItem = this.getOffsetItem(item);
                    resultItem = item;
                }
            });

        if (!resultItem) {
            return null;
        }

        return resultItem as HTMLElement;
    }

    return this.area.querySelector(`.${this.itemClass}[data-id="${value}"]`) as HTMLElement;
};

export default getItem;
