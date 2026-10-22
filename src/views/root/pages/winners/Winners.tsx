import React from 'react';

import Page from '@/src/components/page/Page.tsx';
import { StoreT, WithStore } from '@/src/store/store.tsx';

import Header from './components/header/Header.tsx';

import WinnersI from './types.ts';

class Winners extends Page<WinnersI['props'], WinnersI['state']> implements WinnersI {
    parent: WinnersI['parent'];

    constructor(props: WinnersI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    mode = 'inner' as const;

    render() {
        return this.renderPage({
            render: () => (
                <>
                    <Header />
                </>
            ),
            className: '_inner',
        });
    }
}

const mapStore = (store: StoreT) => ({
    authUser: store.authUser,
});

export default WithStore(Winners, mapStore);
