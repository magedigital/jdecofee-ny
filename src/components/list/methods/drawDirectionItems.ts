import I from '../types.ts';

const drawDirectionItems: I['drawDirectionItems'] = async function () {
    const { items } = this.state;
    const { currentItem, currentNumber, allItems, allItemProp } = this.props;

    const clearItem = (itemNode: HTMLElement) => {
        itemNode.removeAttribute('data-prev');
        itemNode.removeAttribute('data-next');
    };

    if ((!allItems && typeof currentNumber !== 'number') || items.length < 2) {
        items.forEach((item) => {
            const itemNode = this.parent.current!.querySelector(
                `.list__item[data-id="${item._id}"]`,
            ) as HTMLElement;

            if (itemNode) {
                clearItem(itemNode);
            }
        });

        return;
    }

    items.forEach((item) => {
        const itemNode = this.parent.current!.querySelector(
            `.list__item[data-id="${item._id}"]`,
        ) as HTMLElement;

        if (itemNode) {
            const itemProp = item[allItemProp || '_id'] as string;
            const itemIndex = allItems ? allItems.indexOf(itemProp) : undefined;

            if (allItems) {
                clearItem(itemNode);

                if (itemIndex === this.currentIndex) {
                    const currentIndex = allItems.indexOf(currentItem!);

                    itemNode.setAttribute(
                        itemIndex! < currentIndex! ? 'data-prev' : 'data-next',
                        'true',
                    );
                    // itemNode.classList.add(itemIndex! < currentIndex! ? '_prev' : '_next');
                } else {
                    itemNode.setAttribute(
                        itemIndex! < this.currentIndex! ? 'data-prev' : 'data-next',
                        'true',
                    );
                    // itemNode.classList.add(itemIndex! < this.currentIndex! ? '_prev' : '_next');
                }
            }

            if (
                typeof currentNumber === 'number' &&
                typeof this.currentNumber === 'number' &&
                typeof item.indexNumber === 'number'
            ) {
                clearItem(itemNode);

                if (item.indexNumber === this.props.currentNumber) {
                    itemNode.setAttribute(
                        item.indexNumber < this.currentNumber ? 'data-prev' : 'data-next',
                        'true',
                    );
                } else {
                    itemNode.setAttribute(
                        item.indexNumber < this.props.currentNumber! ? 'data-prev' : 'data-next',
                        'true',
                    );
                }
            }
        }
    });
};

export default drawDirectionItems;
