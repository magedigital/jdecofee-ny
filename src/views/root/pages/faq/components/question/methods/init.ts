import { throttle } from 'throttle-debounce';

import removeTransition from '@/src/utils/removeTransition.ts';

import I from '../types.ts';

const init: I['init'] = async function (this: I) {
    const { question } = this.props;
    const contentNode = this.parent.current!.querySelector(
        '.faqQuestion__contentInner',
    ) as HTMLElement;

    if (!contentNode) {
        return;
    }

    if (!this.state.contentHeight) {
        removeTransition({ item: '.faqQuestion' });
    }

    await this.asyncSetState({
        contentHeight: contentNode.offsetHeight,
        isActive: question.key === 1,
    });

    if (!this.resizeThrottle) {
        this.resizeThrottle = throttle(300, this.init!);

        document.addEventListener('changeWidthWindow', this.resizeThrottle!);
        document.addEventListener('windowReady', this.init!);

        this.unmountHandlers.all = () => {
            document.removeEventListener('changeWidthWindow', this.resizeThrottle!);
            document.removeEventListener('windowReady', this.init!);
        };

        this.timers.check = setTimeout(this.init!.bind(this), 300);
    }
};

export default init;
