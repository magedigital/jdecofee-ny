import I from '../types.ts';

const getNeedItems: I['getNeedItems'] = function ({ dir }) {
    const startItem =
        this.moveArea.children[dir === 'prev' ? 0 : this.moveArea.children.length - 1];
    const startItemsIndexes: {
        [s: number]: HTMLElement;
    } = {};

    this.startItems.forEach((item, key) => {
        startItemsIndexes[key] = item.cloneNode(true) as HTMLElement;
    });

    const currentItem = startItem;
    const resultItems = [];

    let currentIndex = +(currentItem.getAttribute('data-key') as string);
    const inertMaxWidth = this.inertMax * this.inertStep;
    const resultWidth = inertMaxWidth + this.area.offsetWidth;
    let currentWidth = 0;

    while (currentWidth < resultWidth) {
        if (dir === 'prev') {
            if (currentIndex === 0) {
                currentIndex = this.startItems.length;
            }

            currentIndex -= 1;
        }

        if (dir === 'next') {
            if (currentIndex === this.startItems.length - 1) {
                currentIndex = -1;
            }

            currentIndex += 1;
        }

        const thisItem: HTMLElement = this.area.querySelector(
            `.${this.itemClass}[data-key="${currentIndex}"]`,
        ) as HTMLElement;

        if (thisItem) {
            currentWidth += thisItem.offsetWidth;
        }

        resultItems.push({ item: startItemsIndexes[currentIndex], key: currentIndex });
    }

    return resultItems;
};

export default getNeedItems;
