import I from '../types.ts';

const deleteListItems: I['deleteListItems'] = async function ({ items }) {
    let resultItems = [...(this.state.listItems || [])];

    items.forEach((id) => {
        const index = resultItems.findIndex((item) => item._id === id);

        if (index !== -1) {
            resultItems.splice(index, 1);
        }
    });

    if (this.modifySetListItems) {
        resultItems = this.modifySetListItems(resultItems);
    }

    await this.asyncSetState({ listItems: resultItems, ...this.setListItemsKeys(resultItems) });
};

export default deleteListItems;
