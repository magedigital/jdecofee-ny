import I from '../types.ts';

const init: I['init'] = async function (this: I) {
    this.savedValue = this.props.value;
};

export default init;
