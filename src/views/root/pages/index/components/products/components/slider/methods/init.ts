import Slider from '@/src/services/slider/Slider.ts';

import I from '../types.ts';

const init: I['init'] = async function (this: I) {
    const slider = this.parent.current!;

    if (this.slider) {
        this.slider.destroy();
    }

    this.slider = new Slider({
        slider,
        area: slider.querySelector('.indexProducts__sliderInner')!,
        moveArea: slider.querySelector('.indexProducts__sliderItems')!,
        itemClass: 'indexProducts__sliderItem',
        withDrag: true,
        infinity: true,
        buttons: {
            prev: slider.querySelector('.indexProducts__sliderBtn._prev') as HTMLElement,
            next: slider.querySelector('.indexProducts__sliderBtn._next') as HTMLElement,
        },
    });

    this.unmountHandlers.all = () => {
        this.slider!.destroy();
    };
};

export default init;
