import I from '../types.ts';

const init: I['init'] = async function (this: I) {
    const { length } = this.props;
    const inputs = new Array(length).fill('');

    await this.asyncSetState({ inputs });
};

export default init;
