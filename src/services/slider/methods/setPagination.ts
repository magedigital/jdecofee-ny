import I from '../types.ts';

const setPagination: I['setPagination'] = function () {
    if (!this.pagination) {
        return;
    }

    const { parent, itemClass } = this.pagination;

    if (typeof parent === 'object' && typeof itemClass === 'string') {
        this.itemsGroups.forEach((group, key) => {
            const pagItem = document.createElement('div');

            pagItem.setAttribute('data-key', key.toString());

            pagItem.classList.add(itemClass);

            parent.appendChild(pagItem);
        });

        this.paginationInit = true;
    }
};

export default setPagination;
