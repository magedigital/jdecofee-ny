import I, { SliderItemT } from '../types.ts';

const getReactItems: I['getReactItems'] = function () {
    const resultItems: SliderItemT[] = [];

    this.moveArea.querySelectorAll(`.${this.itemClass}`).forEach((item) => {
        const itemNode = item as HTMLElement;
        const key = +itemNode.getAttribute('data-key')!;
        const id = itemNode.getAttribute('data-id')!;
        const isCurrent = itemNode.classList.contains('_current');

        resultItems.push({ id, key, isCurrent });
    });

    return resultItems;
};

export default getReactItems;
