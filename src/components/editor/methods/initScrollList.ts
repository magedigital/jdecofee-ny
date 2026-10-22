import I from '../types.ts';

const initScrollList: I['initScrollList'] = async function (target) {
    const targetNode =
        typeof target === 'string' ? this.parent.current!.querySelector(target) : target;

    if (!targetNode) {
        return;
    }

    this.listScrollTargetNode = targetNode as HTMLElement;

    this.listScrollTargetNode.addEventListener('scroll', this.listScrollHandler);

    if (this.getListItems) {
        const query = this.getListQuery();

        const { items, isLimit, count } = await this.getListItems({ query });

        await this.setListItems({ items, isLimit, count });
    }

    this.unmountHandlers.scroll = () =>
        this.listScrollTargetNode!.removeEventListener('scroll', this.listScrollHandler);
};

export default initScrollList;
