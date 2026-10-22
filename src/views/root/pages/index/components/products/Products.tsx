import React from 'react';

import Default from '@/src/components/default/Default.tsx';
import Media from '@/src/components/media/Media.tsx';

import Slider from './components/slider/Slider.tsx';

import init from './methods/init.ts';

import ProductsI from './types.ts';

class Products extends Default<ProductsI['props'], ProductsI['state']> implements ProductsI {
    parent: ProductsI['parent'];

    constructor(props: ProductsI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    init = init;

    render() {
        const { products } = this.state;

        return (
            <div
                ref={this.parent}
                className={this.getClass('indexProducts _SECTION', !!products && '_init')}
            >
                <div className="indexProducts__inner _INNER">
                    <h3 className="indexProducts__title _TITLE _dark">продукты-участники</h3>
                    <div className="indexProducts__content _FULL_W">
                        <Media check={(d) => d === 'desktop' && !!products}>
                            <Slider products={products!} />
                        </Media>
                        <Media check={(d) => d === 'mobile' && !!products}>
                            <Slider products={products!} />
                        </Media>
                    </div>
                </div>
            </div>
        );
    }
}

export default Products;
