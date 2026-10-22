import React from 'react';

import Default from '@/src/components/default/Default.tsx';
import Icon from '@/src/components/icon/Icon.tsx';

import init from './methods/init.ts';

import SliderI from './types.ts';

class Slider extends Default<SliderI['props'], SliderI['state']> implements SliderI {
    parent: SliderI['parent'];

    constructor(props: SliderI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    init = init;

    render() {
        const { products } = this.props;
        return (
            <div ref={this.parent} className="indexProducts__slider">
                <div className="indexProducts__sliderBtn _prev _CLICK">
                    <Icon name="prev-arrow" />
                </div>
                <div className="indexProducts__sliderBtn _next _CLICK">
                    <Icon name="next-arrow" />
                </div>
                <div className="indexProducts__sliderInner">
                    <div className="indexProducts__sliderItems">
                        {products.map((product, i) => (
                            <div className="indexProducts__sliderItem" key={i}>
                                <div className="indexProducts__product">
                                    <div className="indexProducts__productHead">
                                        <img
                                            className="indexProducts__productThumb"
                                            src={product.image}
                                        />
                                    </div>
                                    <p className="indexProducts__productTitle">{product.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Slider;
