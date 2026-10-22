import I from '../types.ts';

const destroy: I['destroy'] = function (force = true) {
    if (this.resizeTimerId) {
        clearTimeout(this.resizeTimerId);
    }

    if (force) {
        this.destroyNodes();
    }

    if (this.buttons) {
        (['prev', 'next'] as const).forEach((key) => {
            const button = this.buttons![key];

            if (button) {
                button.onclick = null;
            }
        });
    }

    document.removeEventListener('customResize', this.resize);

    (this.area.removeEventListener as ListenerT)('mousedown', this.start, { passive: false });
    (document.removeEventListener as ListenerT)('mousemove', this.move, { passive: false });
    (document.removeEventListener as ListenerT)('mouseup', this.end);
    (document.removeEventListener as ListenerT<KeyboardEvent>)('keydown', this.keyboardHandler);

    (this.area.removeEventListener as ListenerT)('touchstart', this.start, { passive: false });
    (document.removeEventListener as ListenerT)('touchmove', this.move, { passive: false });
    (document.removeEventListener as ListenerT)('touchend', this.end);
};

export default destroy;
