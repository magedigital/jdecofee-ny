import I from '../types.ts';

const start: I['start'] = function (e) {
    if (this.isMove) {
        return;
    }

    if (this.animateId) {
        cancelAnimationFrame(this.animateId);

        this.animateId = undefined;

        this.endPos = this.movePos;
    }

    this.isMove = true;

    const startValue = (
        (e as TouchEvent).changedTouches ? (e as TouchEvent).changedTouches[0] : (e as MouseEvent)
    ).pageX;
    const checkValue = (
        (e as TouchEvent).changedTouches ? (e as TouchEvent).changedTouches[0] : (e as MouseEvent)
    ).pageY;

    this.startPos = startValue;
    this.checkPos = checkValue;

    this.move(e);

    if (this.callback) {
        this.callback({
            type: 'startDrag',
        });
    }
};

export default start;
