import I from '../types.ts';

const changePropsCb: I['changePropsCb'] = async function (this: I, p) {
    if (p === 'clearKey') {
        this.checkClear();
    }
};

export default changePropsCb;
