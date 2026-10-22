import I from '../types.ts';

const listScrollHandler: I['listScrollHandler'] = async function (e) {
    const { listLimit } = this.state;

    if (listLimit) {
        return;
    }

    const target = e.target as HTMLElement;
    const scrollSize =
        target[this.listDir === 'vertical' ? 'scrollHeight' : 'scrollWidth'] -
        target[this.listDir === 'vertical' ? 'offsetHeight' : 'offsetWidth'];
    const scrollVal = target[this.listDir === 'vertical' ? 'scrollTop' : 'scrollLeft'];
    const offset = 20;

    if (!this.listProcess && scrollVal + offset >= scrollSize) {
        this.listProcess = true;

        this.getListItemsMore();
    }
};

export default listScrollHandler;
