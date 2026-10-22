import I from '../types.ts';

const currentItemsHandler: I['currentItemsHandler'] = function (offset) {
    if (this.showEach) {
        const currentItem = this.getItem(this.current) as HTMLElement;

        this.area.querySelectorAll(`.${this.itemClass}`).forEach((item) => {
            item.classList.remove('_current');
        });

        if (currentItem) {
            currentItem.classList.add('_current');
        }
    } else {
        this.area.querySelectorAll<HTMLElement>(`.${this.itemClass}`).forEach((item) => {
            const offsetItem = this.getOffsetItem(item) - (offset || 0);

            if (offsetItem >= 0 && offsetItem + item.offsetWidth <= this.area.offsetWidth) {
                item.classList.add('_current');
            } else {
                item.classList.remove('_current');
            }
        });
    }
};

export default currentItemsHandler;
