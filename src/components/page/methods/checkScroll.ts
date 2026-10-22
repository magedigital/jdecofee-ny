import sendGoal from '@/src/utils/sendGoal.ts';

import I from '../types.ts';

const checkScroll: I['checkScroll'] = async function (e) {
    const stop = 200;
    const targetNode = e.target as HTMLElement;
    const { scrollTop } = targetNode;

    if (scrollTop > stop && !this.isFixBarShow) {
        this.isFixBarShow = true;
        await this.asyncSetState({ isFixBarShow: true });
    }

    if (scrollTop <= stop && this.isFixBarShow) {
        this.isFixBarShow = false;
        await this.asyncSetState({ isFixBarShow: false });
    }

    if (scrollTop > 10 && !this.isCloseMove) {
        this.isCloseMove = true;
        await this.asyncSetState({ isCloseMove: true });
    }
    if (scrollTop <= 10 && this.isCloseMove) {
        this.isCloseMove = false;
        await this.asyncSetState({ isCloseMove: false });
    }

    if (this.pageName) {
        const scrollKey = ['scroll', this.pageName].join('_');
        localStorage.setItem(scrollKey, scrollTop.toString());
    }

    if (this.pageName === 'index') {
        if (!this.scrollData) {
            this.scrollData = {};
        }

        const scrollPercent = scrollTop / (targetNode.scrollHeight - targetNode.offsetHeight);

        if (scrollPercent > 0.3 && !this.scrollData[3]) {
            this.scrollData[3] = true;
            sendGoal('homeScroll30');
        }
        if (scrollPercent > 0.6 && !this.scrollData[6]) {
            this.scrollData[6] = true;
            sendGoal('homeScroll60');
        }
        if (scrollPercent > 0.9 && !this.scrollData[9]) {
            this.scrollData[9] = true;
            sendGoal('homeScroll90');
        }
    }

    if (this.pageName === '5ka') {
        if (!this.scrollData) {
            this.scrollData = {};
        }

        const scrollPercent = scrollTop / (targetNode.scrollHeight - targetNode.offsetHeight);

        if (scrollPercent > 0.3 && !this.scrollData[3]) {
            this.scrollData[3] = true;
            sendGoal('5kaScroll30');
        }
        if (scrollPercent > 0.6 && !this.scrollData[6]) {
            this.scrollData[6] = true;
            sendGoal('5kaScroll60');
        }
        if (scrollPercent > 0.9 && !this.scrollData[9]) {
            this.scrollData[9] = true;
            sendGoal('5kaScroll90');
        }
    }
};

export default checkScroll;
