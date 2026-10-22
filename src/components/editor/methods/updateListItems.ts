import I from '../types.ts';

const updateListItems: I['updateListItems'] = async function ({ items, isFull, isAdd }) {
    let resultItems = [...(this.state.listItems || [])];
    const indexes: Record<string, number> = {};

    resultItems.forEach((item, index) => {
        indexes[item._id] = index;
    });

    items.forEach((item) => {
        const index = indexes[item._id];

        if (index !== -1) {
            if (isFull) {
                resultItems[index] = item;
            } else {
                Object.keys(item).forEach((key) => {
                    resultItems[index][key] = item[key];
                });
            }
        } else if (isAdd) {
            resultItems.push(item);
        }
    });

    if (this.modifySetListItems) {
        resultItems = this.modifySetListItems(resultItems);
    }

    await this.asyncSetState({ listItems: resultItems, ...this.setListItemsKeys(resultItems) });
};

export default updateListItems;
