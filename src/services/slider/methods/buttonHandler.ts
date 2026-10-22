import I from '../types.ts';

const buttonHandler: I['buttonHandler'] = function ({ dir }) {
    if (this.buttonProcess) {
        return;
    }

    let current = null;

    const currentItem = this.getItem(this.current);

    if (currentItem) {
        if (this.showEach) {
            const nextItem =
                dir === 'next'
                    ? currentItem.nextElementSibling
                    : currentItem.previousElementSibling;

            if (nextItem) {
                current = +(nextItem.getAttribute('data-id') as string);
            }
        } else {
            let resultNextItem;
            let nextItem = currentItem;
            const resultWidth = this.area.offsetWidth * (dir === 'next' ? 1 : -1);
            let currentWidth = 0;

            while (
                nextItem &&
                (dir === 'next'
                    ? currentWidth < resultWidth &&
                      +(nextItem.getAttribute('data-key') as string) < (this.lastItemKey as number)
                    : currentWidth > resultWidth)
            ) {
                nextItem = (
                    dir === 'next' ? nextItem.nextElementSibling : nextItem.previousElementSibling
                ) as HTMLElement;

                if (nextItem) {
                    resultNextItem = nextItem;

                    currentWidth =
                        this.getOffsetItem(nextItem) +
                        nextItem.offsetWidth * (dir === 'next' ? 1 : -1);
                }
            }

            if (resultNextItem) {
                current = +(resultNextItem.getAttribute('data-id') as string);
            }
        }
    }

    if (current !== null) {
        this.buttonProcess = true;

        if (this.animateId) {
            cancelAnimationFrame(this.animateId);

            this.endPos = Math.round(this.movePos);
        }

        this.moveToCurrentItem({
            current,
            inertValue: 0,
            callback: () => {
                this.buttonProcess = false;
            },
        });
    }
};

export default buttonHandler;
