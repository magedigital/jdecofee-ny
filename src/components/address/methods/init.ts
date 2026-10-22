import I from '../types.ts';

const init: I['init'] = async function (this: I) {
    const { pointAddress, pointId } = this.props;

    if (pointAddress && !pointId) {
        await this.asyncSetState({ search: pointAddress });
    }
};

export default init;
