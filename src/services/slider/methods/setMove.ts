import I from '../types.ts';

const setMove: I['setMove'] = function (value, force) {
    this.moveArea.style.transform = `translate3d(${value}px,0,0)`;

    if (this.reactMoveArea && !force) {
        this.reactMoveArea.style.transform = `translate3d(${value}px,0,0)`;
    }
};

export default setMove;
