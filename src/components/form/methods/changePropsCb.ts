import I from '../types.ts';

const changePropsCb: I['changePropsCb'] = async function (this: I, key) {
    if (key === 'fieldsKey') {
        const { data } = this.props;
        await this.initTarget({ data: { ...this.state.form, ...data }, targetName: 'form' });
    }
};

export default changePropsCb;
