import Dadata from '@/src/services/dadata/Dadata.ts';

import I from '../types.ts';

const getAddresses: I['getAddresses'] = async function () {
    const { value } = this.props;

    if (!value || value.length <= 2) {
        await this.asyncSetState({ addressesList: undefined, loadingKey: undefined });
        return;
    }

    const result = await new Dadata().get(value);

    await this.asyncSetState({ addressesList: result, loadingKey: undefined });
};

export default getAddresses;
