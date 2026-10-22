import Dadata from '@/src/services/dadata/Dadata.ts';

import I from '../types.ts';

const addressHandler: I['addressHandler'] = async function ({ value, choice }) {
    let list = [...this.state.list];
    const { onChange } = this.props;

    let resultValue = value;

    if (choice) {
        const div = document.createElement('div');

        div.innerHTML = value;

        resultValue = div.innerText;

        await onChange({ value: resultValue });
        await this.asyncSetState({ search: resultValue });

        list = [];
    }

    await this.asyncSetState({ search: resultValue, list });

    if (this.timers.dadata) {
        clearTimeout(this.timers.dadata);
    }

    if (!choice) {
        this.timers.dadata = setTimeout(async () => {
            const data = await new Dadata().get(value);
            await this.asyncSetState({ list: data });
        }, 300);
    }
};

export default addressHandler;
