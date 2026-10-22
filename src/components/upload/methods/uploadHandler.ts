import I from '../types.ts';

const uploadHandler: I['uploadHandler'] = async function ({ file }) {
    const { onChange, disabled } = this.props;

    if (disabled) {
        return;
    }

    await this.asyncSetState({ loadingKey: 'upload' });

    try {
        await onChange({ file });
    } catch (e) {}

    await this.asyncSetState({ loadingKey: undefined });
};

export default uploadHandler;
