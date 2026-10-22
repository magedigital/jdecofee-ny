import getLocation from '@/src/utils/getLocation.ts';
import scrollToBlock from '@/src/utils/scrollToBlock.ts';

import I from '../types.ts';

const pageInit: I['pageInit'] = async function (this: I) {
    const { search } = getLocation();

    if (typeof search.ancor === 'string') {
        const scrollNode = this.parent
            .current!.closest('.page')!
            .querySelector<HTMLElement>('.page__scroll');
        const blockNode = document.querySelector<HTMLElement>(`[data-ancor="${search.ancor}"]`);

        if (scrollNode && blockNode) {
            scrollToBlock({ blockNode, scrollNode, duration: 0 });
        }
    }

    // if (1) {
    //     setTimeout(() => {
    //         appStore.getState().setPopup({ name: 'inviteFriendPopup' });
    //     }, 1_000);
    // }

    // if (process.env.REACT_APP_ENV !== 'local' && !localStorage.getItem('5ka-popup')) {
    //     setTimeout(() => {
    //         appStore.getState().setPopup({ name: 'pyterochkaPopup' });
    //     }, 1_500);
    // }
};

export default pageInit;
