import I from '../types.ts';

const init: I['init'] = async function (this: I) {
    const { data } = this.props;

    await this.initTarget({ data: { ...data }, targetName: 'form' });
};

export default init;
