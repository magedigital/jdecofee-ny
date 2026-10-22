import I from '../types.ts';

const move: I['move'] = function (e) {
    if (!this.isMove) {
        return;
    }

    clearTimeout(this.moveTimerId);

    const moveValue = (
        (e as TouchEvent).changedTouches ? (e as TouchEvent).changedTouches[0] : (e as MouseEvent)
    ).pageX;
    const checkValue = (
        (e as TouchEvent).changedTouches ? (e as TouchEvent).changedTouches[0] : (e as MouseEvent)
    ).pageY;

    const resultCheckValue = Math.abs(this.checkPos - checkValue);

    if (Math.abs(this.startPos - moveValue) > 3 && this.isScroll === undefined) {
        this.isScroll = false;
    }

    if (resultCheckValue > 5 && this.isScroll === undefined) {
        this.isScroll = true;
    }

    if (this.isScroll === false) {
        e.preventDefault();
    }

    if (this.isScroll === true) {
        return;
    }

    if (!this.moveTime) {
        this.moveTime = new Date().getTime();
        this.moveTimeStart = moveValue;
    }

    this.moveTimerId = setTimeout(() => {
        this.moveTime = null;
        this.moveTimeStart = null;
    }, 500);

    let movePos = -(this.startPos - moveValue) + this.endPos;

    this.direction = this.startPos - moveValue < 0 ? -1 : 1;

    if (!this.infinity) {
        // console.log(movePos, -this.rightMaxOffset);

        if (movePos > this.leftMaxOffset) {
            const delta = movePos - this.leftMaxOffset;
            const scale = 1 + delta / 200;

            movePos = this.leftMaxOffset + delta / scale;
        }

        if (movePos < -this.rightMaxOffset) {
            const delta = movePos + this.rightMaxOffset;
            const scale = 1 + Math.abs(delta) / 200;

            movePos = -this.rightMaxOffset + delta / scale;
        }
    }

    this.movePos = movePos;

    this.setMove(this.movePos);
};

export default move;
