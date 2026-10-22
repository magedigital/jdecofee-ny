import { appStore } from '@/src/store/store.tsx';

import I from '../types.ts';

const keysCallback: I['keysCallback'] = async function (this: I, { name }) {
    const { isMenuShow } = this.state;
    const { currentPopup } = appStore.getState();

    if (this.mode === 'inner' && name === 'Escape' && !isMenuShow && !currentPopup) {
        this.close();
    }
};

export default keysCallback;
