import getRealParams from '@/src/utils/getRealParams.ts';
import { setPxFromRem } from '@/src/utils/setPxFromRem.ts';

import I from '../types.ts';

const resizeHandler: I['resizeHandler'] = async function () {
    if (!this.parent.current) {
        return;
    }

    const topBarNode = this.parent.current!.querySelector<HTMLElement>('.popup__topBar');

    if (!topBarNode) {
        return;
    }

    const parentHeight = this.parent.current!.offsetHeight;
    const topBarHeight = topBarNode.offsetHeight;

    const p = getRealParams({
        parent: this.parent.current!,
        elem: '.popup__innerBox',
        width: this.parent.current!.offsetWidth,
        height: this.parent.current!.offsetHeight,
        // isNotRemove: true,
    }) as any;

    const diffHeight = parentHeight - p.height - topBarHeight - setPxFromRem(120);

    if (diffHeight < 0 && !this.isHeightMin) {
        this.isHeightMin = true;
        await this.asyncSetState({ isHeightMin: true });
    }

    if (diffHeight >= 0 && this.isHeightMin) {
        this.isHeightMin = false;
        await this.asyncSetState({ isHeightMin: false });
    }
};

export default resizeHandler;
