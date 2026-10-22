import I from '../types.ts';

const dropHandler: I['dropHandler'] = async function (this: I, isActive = !this.state.isActive) {
    const contentNode = this.parent.current!.querySelector(
        '.faqQuestion__contentInner',
    ) as HTMLElement;

    if (!contentNode) {
        return;
    }

    await this.asyncSetState({ isActive, contentHeight: contentNode.offsetHeight });
};

export default dropHandler;
