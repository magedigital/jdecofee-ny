import I from '../types.ts';

const setListItems: I['setListItems'] = async function ({ items, isLimit, count, concat }) {
    const resultItems = concat ? [...(this.state.listItems || [])] : items;

    if (concat) {
        const indexes: Record<string, boolean> = {};

        this.state.listItems?.forEach((listItem) => {
            indexes[listItem._id] = true;
        });

        items.forEach((item) => {
            if (!indexes[item._id]) {
                resultItems.push(item);
            }
        });
    }

    await this.asyncSetState({ listItems: resultItems, listLimit: isLimit, listCount: count });

    if (this.afterSetListItems) {
        await this.afterSetListItems();
    }
};

export default setListItems;
