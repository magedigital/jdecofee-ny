import React from 'react';

import Page from '@/src/components/page/Page.tsx';
import { StoreT, WithStore } from '@/src/store/store.tsx';

import pageInit from './methods/pageInit.ts';

import ProfileI from './types.ts';

import renderCheques from './renders/renderCheques.tsx';
import renderContent from './renders/renderContent.tsx';
import renderHead from './renders/renderHead.tsx';
import renderMain from './renders/renderMain.tsx';
import renderPrizes from './renders/renderPrizes.tsx';
import renderTableCol from './renders/renderTableCol.tsx';

class Profile extends Page<ProfileI['props'], ProfileI['state']> implements ProfileI {
    parent: ProfileI['parent'];

    constructor(props: ProfileI['props']) {
        super(props);

        this.state = {};

        this.parent = React.createRef();
    }

    mode = 'inner' as const;

    pageInit = pageInit;

    renderContent = renderContent;
    renderHead = renderHead;
    renderMain = renderMain;
    renderCheques = renderCheques;
    renderTableCol = renderTableCol;
    renderPrizes = renderPrizes;

    render() {
        return this.renderPage({
            render: () => (
                <>
                    {this.renderHead()}
                    {this.renderContent()}
                </>
            ),
            renderTopInfo: () => {
                const { prizes } = this.state;
                const actPrize = prizes?.find((p) => p.act_required && p.status === 'DATA_NEEDED');

                if (!actPrize) {
                    return;
                }

                return (
                    <div className="page__topInfo">
                        <div>
                            Для получения приза внесите необходимую информацию в форму по{' '}
                            <a
                                href="https://forms.yandex.ru/cloud/6a1d664e068ff0f5ac394f78"
                                target="_blank"
                                rel="noreferrer"
                            >
                                ссылке
                            </a>
                        </div>
                    </div>
                );
            },
        });
    }
}

const mapStore = (s: StoreT) => ({
    authUser: s.authUser,
});

export default WithStore(Profile, mapStore);
