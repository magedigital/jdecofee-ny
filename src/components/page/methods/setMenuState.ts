import I from '../types.ts';

const setMenuState: I['setMenuState'] = async function (this: I, s) {
    await this.asyncSetState({ isMenuShow: s });
};

export default setMenuState;
