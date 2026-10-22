import I from '../types.ts';

import { AppRouter } from '../../../index.tsx';

const init: I['init'] = async function () {
    const { filter, pages } = this.props;
    const resultPages = (Object.keys(pages) as (keyof typeof AppRouter.pages)[]).filter(filter);

    await this.asyncSetState.call(this, {
        pages: resultPages,
    });
};

export default init;
