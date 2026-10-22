import React from 'react';

import Page from '@/src/components/page/Page.tsx';
import { StoreT, WithStore } from '@/src/store/store.tsx';

import Footer from '../../components/footer/Footer.tsx';
import Header from './components/header/Header.tsx';
import Prizes from './components/prizes/Prizes.tsx';
import Products from './components/products/Products.tsx';
import Rules from './components/rules/Rules.tsx';

import changePropsCb from './methods/changePropsCb.ts';
import pageInit from './methods/pageInit.ts';

import IndexI from './types.ts';

class Index extends Page<IndexI['props'], IndexI['state']> implements IndexI {
    parent: IndexI['parent'];

    constructor(props: IndexI['props']) {
        super(props);

        this.state = {};

        this.parent = React.createRef();
    }

    changingProps = ['mainContent'];

    pageName = 'index';

    changePropsCb = changePropsCb;

    pageInit = pageInit;

    render() {
        return this.renderPage({
            className: '_index',
            render: () => (
                <>
                    <Header />
                    <Rules />
                    <Prizes />
                    <Products />
                    <Footer />
                </>
            ),
        });
    }
}

const mapStore = (s: StoreT) => ({
    mainContent: s.mainContent,
});

export default WithStore(Index, mapStore);
