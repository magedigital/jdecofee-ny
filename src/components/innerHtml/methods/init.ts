import I from '../types.ts';

const init: I['init'] = async function (this: I) {
    const { text } = this.props;

    this.parent.current!.innerHTML = text;

    await this.changePropsCb!('disabled');
};

export default init;
