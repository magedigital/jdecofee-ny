import I from '../types.ts';

const setWeek: I['setWeek'] = async function (week) {
    await this.asyncSetState({ searchWeek: week, page: 1 });
    await this.getWinners(true);
};

export default setWeek;
