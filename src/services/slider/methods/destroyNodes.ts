import I from '../types.ts';

const destroyNodes: I['destroyNodes'] = function () {
    if (this.pagination && this.paginationInit) {
        const { parent } = this.pagination;

        parent.innerHTML = '';
    }

    (this.moveArea as any).style = '';

    if (this.reactMoveArea) {
        (this.reactMoveArea as any).style = '';
    }

    if (this.infinity) {
        this.moveArea.innerHTML = '';

        this.startItems.forEach((startItem) => {
            this.moveArea.appendChild(startItem.cloneNode(true));
        });
    }
};

export default destroyNodes;
