import { appStore } from '@/src/store/store.tsx';

import I from '../types.ts';

import { AppRouter } from '../../../index.tsx';

const close: I['close'] = async function () {
    const { authUser } = appStore.getState();

    if (typeof this.savedPrevPageUrl === 'string') {
        AppRouter.changePage({ href: this.savedPrevPageUrl, savePrevPage: false });
    } else {
        AppRouter.changePage({ pageName: authUser ? 'profile' : 'index' });
    }
};

export default close;
