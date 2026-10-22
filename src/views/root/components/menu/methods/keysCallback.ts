import I from '../types.ts';

const keysCallback: I['keysCallback'] = async function (this: I, { name }) {
    const { setState } = this.props;

    if (name === 'Escape') {
        await setState(false);
    }
};

export default keysCallback;
