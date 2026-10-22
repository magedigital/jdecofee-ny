import I from '../types.ts';

const init: I['init'] = async function (this: I) {
    const { scanData } = this.props;

    await this.initTarget({
        data: { ...scanData },
        targetName: 'form',
    });
};

export default init;
