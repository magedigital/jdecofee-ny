import I from '../types.ts';

const setActive: I['setActive'] = async function (this: I, isActive = !this.state.isActive) {
    await this.asyncSetState({ isActive });
};

export default setActive;
