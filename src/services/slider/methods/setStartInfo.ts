import I from '../types.ts';

const setStartInfo: I['setStartInfo'] = function () {
    let maxItemWidth = 0;

    this.startItems.forEach((item) => {
        if (item.offsetWidth > maxItemWidth) {
            maxItemWidth = item.offsetWidth;
        }
    });

    this.maxItemWidth = maxItemWidth;

    let itemsGroups: number[][] = [];

    if (this.showEach) {
        itemsGroups = this.startItems.map((item, key) => [key]);
    } else {
        let currentGroup = 0;
        let currentIndex = 0;
        let currentItemOffset = 0;
        let currentItem = Array.from(
            this.area.querySelectorAll(`.${this.itemClass}`),
        )[0] as HTMLElement;

        while (currentItem) {
            currentItemOffset = this.getOffsetItem(currentItem) + currentItem.offsetWidth;

            currentGroup = Math.floor(currentItemOffset / this.area.offsetWidth);

            if (!itemsGroups[currentGroup]) {
                itemsGroups[currentGroup] = [];
            }

            itemsGroups[currentGroup].push(currentIndex);

            currentIndex += 1;
            currentItem = currentItem.nextElementSibling as HTMLElement;
        }
    }

    this.itemsGroups = itemsGroups;

    if (!this.infinity) {
        let lastItemKey: number | null = null;

        const lastItem = this.area.querySelector(
            `.${this.itemClass}[data-key="${this.itemsCount - 1}"]`,
        ) as HTMLElement;

        if (lastItem) {
            this.area.querySelectorAll<HTMLElement>(`.${this.itemClass}`).forEach((item, key) => {
                const itemOffset = this.getOffsetItem(item);
                const lastItemOffset = this.getOffsetItem(lastItem) + lastItem.offsetWidth;

                if (lastItemOffset - itemOffset <= this.area.offsetWidth && lastItemKey === null) {
                    lastItemKey = key;
                }
            });
        }

        if (this.showEach) {
            lastItemKey = this.itemsCount - 1;
        }

        this.lastItemKey = lastItemKey;

        this.leftMaxOffset = 0;

        const rightMaxItem = this.area.querySelector(
            `.${this.itemClass}[data-key="${this.lastItemKey}"]`,
        ) as HTMLElement;

        if (rightMaxItem) {
            this.rightMaxOffset = this.getOffsetItem(rightMaxItem);
        }
    } else {
        this.lastItemKey = Infinity;
    }

    // this.rightMaxOffset = 1000;
};

export default setStartInfo;
