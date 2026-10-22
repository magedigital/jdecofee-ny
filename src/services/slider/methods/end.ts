import I from '../types.ts';

const end: I['end'] = function (e) {
    if (!this.isMove) {
        return;
    }

    clearTimeout(this.moveTimerId);

    const endPos = (
        (e as TouchEvent).changedTouches ? (e as TouchEvent).changedTouches[0] : (e as MouseEvent)
    ).pageX;

    this.endTime = new Date().getTime();

    this.endPos = this.movePos;
    this.startPos = 0;
    this.movePos = 0;
    this.checkPos = 0;
    delete this.isScroll;

    let inertValue = 0;

    if (this.moveTime) {
        inertValue = Math.abs(
            (((this.moveTimeStart as number) - endPos) / (this.endTime - this.moveTime)) * 1.2,
        );
    }

    if (inertValue > this.inertMax) {
        inertValue = this.inertMax;
    }

    // inertValue = 8;

    this.setEndCurrent(inertValue);

    this.isMove = false;
    this.endTime = null;
    this.moveTime = null;
    this.moveTimeStart = null;

    if (this.callback) {
        this.callback({
            type: 'endDrag',
        });
    }
};

export default end;
