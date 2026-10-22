import React from 'react';

import Page from '@/src/components/page/Page.tsx';
import { StoreT, WithStore } from '@/src/store/store.tsx';

import Header from './components/header/Header.tsx';

import FullAnketI from './types.ts';

class FullAnket extends Page<FullAnketI['props'], FullAnketI['state']> implements FullAnketI {
    parent: FullAnketI['parent'];

    constructor(props: FullAnketI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    mode = 'inner' as const;

    render() {
        const { authUser } = this.props;

        return this.renderPage({
            render: () =>
                authUser ? (
                    <>
                        <Header authUser={authUser} />
                    </>
                ) : null,
            className: '_inner',
        });
    }
}

const mapStore = (store: StoreT) => ({
    authUser: store.authUser,
});

export default WithStore(FullAnket, mapStore);
