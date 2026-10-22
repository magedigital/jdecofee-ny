import DefaultI from '@/src/components/default/types';
import Slider from '@/src/services/slider/Slider';

import { ProductT } from '../../types';

type PropsT = {
    products: ProductT[];
};

type StateT = {};

interface SliderI extends DefaultI<PropsT, StateT> {
    slider?: Slider;
}

export default SliderI;
