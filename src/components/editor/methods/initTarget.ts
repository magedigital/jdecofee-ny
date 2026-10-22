import I from '../types.ts';

const initTarget: I['initTarget'] = async function ({ data, targetName }) {
    const savedTargetName = this.getSavedTargetName(targetName);

    await this.asyncSetState({
        [targetName]: structuredClone(data),
        [savedTargetName]: structuredClone(data),
    });
};

export default initTarget;
