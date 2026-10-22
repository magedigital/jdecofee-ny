import I from '../types.ts';

const pageInit: I['pageInit'] = async function (this: I) {
    await this.getContent();
};

export default pageInit;
