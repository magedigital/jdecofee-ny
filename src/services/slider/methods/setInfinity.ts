import I from '../types.ts';

const setInfinity: I['setInfinity'] = function () {
    if (!this.infinity) {
        return;
    }

    const currentItem = this.moveArea.querySelector(
        `.${this.itemClass}[data-id="${this.current}"]`,
    ) as HTMLElement;

    if (!currentItem) {
        return;
    }

    (['prev', 'next'] as const).forEach((dir) => {
        const items = this.getNeedItems({ dir });

        if (items.length) {
            items.forEach(({ item, key }) => {
                const cloneItem = item.cloneNode(true) as HTMLElement;

                cloneItem.setAttribute('data-key', key.toString());
                cloneItem.setAttribute('data-id', (this.allItemId++).toString());

                this.moveArea[dir === 'prev' ? 'prepend' : 'append'](cloneItem);
            });

            if (dir === 'prev') {
                const currentItemOffset = this.getOffsetItem(currentItem);

                this.endPos -= currentItemOffset;

                this.setMove(this.endPos, true);
            }
        }
    });

    const deletedItems: string[] = [];

    const inertMaxWidth = this.inertMax * this.inertStep;
    const resultWidth = inertMaxWidth + this.area.offsetWidth * 2 + this.maxItemWidth / 2;

    this.area.querySelectorAll<HTMLElement>(`.${this.itemClass}`).forEach((item) => {
        const itemOffset = this.getOffsetItem(item);

        if (Math.abs(itemOffset) > resultWidth) {
            deletedItems.push(item.getAttribute('data-id') as string);
        }
    });

    deletedItems.forEach((id) => {
        const item = this.area.querySelector(`.${this.itemClass}[data-id="${id}"]`) as HTMLElement;

        if (item) {
            item.remove();
        }
    });

    const resultItems = this.getReactItems();

    const currentItemOffset = this.getOffsetItem(currentItem);

    this.endPos -= currentItemOffset;

    if (this.reactMoveArea) {
        this.setMove(this.endPos, true);

        this.callback!({
            type: 'setItems',
            items: resultItems,
            reactSetCb: () => {
                this.setMove(this.endPos);
            },
        });
    } else {
        this.setMove(this.endPos);
    }
};

export default setInfinity;
