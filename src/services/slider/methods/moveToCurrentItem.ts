import I from '../types.ts';

const moveToCurrentItem: I['moveToCurrentItem'] = function ({
    current,
    inertValue = 0,
    force,
    callback,
}) {
    const startOffset = this.endPos;
    const currentItem = this.area.querySelector(
        `.${this.itemClass}[data-id="${current}"]`,
    ) as HTMLElement;

    if (!currentItem) {
        return;
    }

    const offset = this.getOffsetItem(currentItem);

    this.current = current as number;
    this.currentKey = +(currentItem.getAttribute('data-key') as string);

    this.paginationHandler();
    this.setCalcSize();

    if (offset !== 0) {
        if (this.callback) {
            this.callback({
                type: 'startMove',
                current: this.current,
                currentKey: this.currentKey,
            });
        }

        if (!force) {
            this.currentItemsHandler(offset);

            if (this.callback && this.reactMoveArea) {
                const resultItems = this.getReactItems();

                this.callback!({
                    type: 'setItems',
                    items: resultItems,
                });
            }
        }

        this.setAnimate({
            timing: inertValue > 2 ? 'easeOut' : 'easeInOut',
            duration: force ? 0 : inertValue > 2 ? this.duration : this.duration - 50,
            draw: (progress: number) => {
                this.movePos = startOffset - progress * offset;

                this.setMove(this.movePos);
            },
            callback: () => {
                this.endPos = Math.round(this.movePos);
                this.startPos = 0;
                this.movePos = 0;

                this.animateId = undefined;

                this.setInfinity();

                if (force) {
                    this.currentItemsHandler();

                    if (this.callback && this.reactMoveArea) {
                        const resultItems = this.getReactItems();

                        this.callback!({
                            type: 'setItems',
                            items: resultItems,
                        });
                    }
                }

                if (typeof callback === 'function') {
                    callback();
                }

                if (this.callback) {
                    this.callback({
                        type: 'move',
                        current: this.current,
                        currentKey: this.currentKey,
                    });
                }

                // console.log(this.current);
            },
            getId: (id: number) => {
                this.animateId = id;
            },
        });
    }
};

export default moveToCurrentItem;
