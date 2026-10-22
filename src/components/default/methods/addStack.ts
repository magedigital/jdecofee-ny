import I from '../types.ts';

const addStack: I['addStack'] = function (fn) {
    if (this.stack.length > 32) {
        this.stack.shift();
    }

    this.stack.push(fn);
    this.doStack();
};

export default addStack;
