import React from 'react';

import Page from '@/src/components/page/Page.tsx';
import { StoreT, WithStore } from '@/src/store/store.tsx';

import Header from './components/header/Header.tsx';

import AktI from './types.ts';

class Akt extends Page<AktI['props'], AktI['state']> implements AktI {
    parent: AktI['parent'];

    constructor(props: AktI['props']) {
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

export default WithStore(Akt, mapStore);
