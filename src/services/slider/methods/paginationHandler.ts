import I from '../types.ts';

const paginationHandler: I['paginationHandler'] = function () {
    if (!this.pagination || !this.paginationInit) {
        return;
    }

    const { parent, itemClass } = this.pagination;
    const currentItem = this.getItem(this.current) as HTMLElement;
    const currentItemKey = +(currentItem.getAttribute('data-key') as string);

    const currentKey = this.itemsGroups.findIndex((group) => group.indexOf(currentItemKey) !== -1);

    parent.querySelectorAll(`.${itemClass}`).forEach((item, key) => {
        item.classList.remove('_current');

        if (key === currentKey) {
            item.classList.add('_current');
        }
    });
};

export default paginationHandler;
