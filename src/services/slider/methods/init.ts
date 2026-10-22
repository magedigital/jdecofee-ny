import I from '../types.ts';

const init: I['init'] = function () {
    this.startPos = 0;
    this.movePos = 0;
    this.endPos = 0;
    this.isMove = false;
    this.allItemId = 0;

    const startItems: HTMLElement[] = [];

    this.area.querySelectorAll(`.${this.itemClass}`).forEach((item, key) => {
        startItems.push(item.cloneNode(true) as HTMLElement);

        item.setAttribute('data-key', key.toString());
        item.setAttribute('data-id', (this.allItemId++).toString());
    });

    this.startItems = startItems;
    this.itemsCount = startItems.length;
    this.moveAreaWidth = this.moveArea.offsetWidth;

    if (!this.area.querySelector(`.${this.itemClass}[data-key="${this.currentKey}"]`)) {
        this.currentKey = 0;
    }

    if (this.currentKey) {
        const currentItem = this.area.querySelectorAll(`.${this.itemClass}`)[this.currentKey];

        if (currentItem) {
            this.current = +(currentItem.getAttribute('data-id') as string);
        }
    }

    this.setStartInfo();
    this.setCurrent();
    this.setPagination();
    this.currentItemsHandler();
    this.paginationHandler();
    this.setInfinity();

    if (this.buttons) {
        (['prev', 'next'] as const).forEach((dir) => {
            const button = this.buttons![dir];

            if (button) {
                button.onclick = () => {
                    this.buttonHandler({ dir });
                };

                button.addEventListener(
                    'mousedown',
                    (e) => {
                        e.stopPropagation();
                    },
                    { passive: false },
                );
                button.addEventListener(
                    'touchstart',
                    (e) => {
                        e.stopPropagation();
                    },
                    { passive: false },
                );
            }
        });
    }

    if (this.notDragItems) {
        this.notDragItems.forEach((className) => {
            const items = this.slider.querySelectorAll(className);

            items.forEach((item) => {
                item.addEventListener(
                    'mousedown',
                    (e) => {
                        e.stopPropagation();
                    },
                    { passive: false },
                );
                item.addEventListener(
                    'touchstart',
                    (e) => {
                        e.stopPropagation();
                    },
                    { passive: false },
                );
            });
        });
    }

    if (this.callback) {
        this.callback({ type: 'init', current: this.current, currentKey: this.current });
    }

    document.addEventListener('customResize', this.resize);

    if (this.withDrag !== false) {
        (this.area.addEventListener as ListenerT)('mousedown', this.start, { passive: false });
        (document.addEventListener as ListenerT)('mousemove', this.move, { passive: false });
        (document.addEventListener as ListenerT)('mouseup', this.end);

        (this.area.addEventListener as ListenerT)('touchstart', this.start, { passive: false });
        (document.addEventListener as ListenerT)('touchmove', this.move, { passive: false });
        (document.addEventListener as ListenerT)('touchend', this.end);
    }

    (document.addEventListener as ListenerT<KeyboardEvent>)('keydown', this.keyboardHandler);
};

export default init;
