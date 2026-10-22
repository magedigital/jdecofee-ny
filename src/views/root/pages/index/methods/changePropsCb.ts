import I from '../types.ts';

const changePropsCb: I['changePropsCb'] = async function (this: I, p) {
    if (p === 'mainContent') {
        await this.asyncSetState({ isInit: true });
    }
};

export default changePropsCb;
