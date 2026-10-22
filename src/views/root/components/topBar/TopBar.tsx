import React from 'react';

import Default from '@/src/components/default/Default.tsx';
import Icon from '@/src/components/icon/Icon.tsx';
import Media from '@/src/components/media/Media.tsx';
import { AppRouter } from '@/src/index.tsx';
import { appStore } from '@/src/store/store.tsx';

import TopBarI from './types.ts';

import renderNav from './renders/renderNav.tsx';

class TopBar extends Default<TopBarI['props'], TopBarI['state']> implements TopBarI {
    parent: TopBarI['parent'];

    constructor(props: TopBarI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    renderNav = renderNav;

    render() {
        const { className, mode, setMenuState } = this.props;

        return (
            <div
                ref={this.parent}
                className={this.getClass('topBar _SECTION', className, this.setClass(mode))}
            >
                <div className="topBar__inner _INNER">
                    <Media check={(d) => d === 'mobile' && mode === 'menu'}>
                        <Icon
                            name="menu-close"
                            className="topBar__btn"
                            onClick={async () => {
                                await setMenuState(mode !== 'menu');
                            }}
                        />
                    </Media>
                    <Media check={(d) => d === 'mobile' && mode !== 'menu'}>
                        <Icon
                            name="menu-open"
                            className="topBar__btn"
                            onClick={async () => {
                                await setMenuState(mode !== 'menu');
                            }}
                        />
                    </Media>
                    <Media check={(d) => d === 'desktop'}>
                        <img
                            className="topBar__logo _monarch"
                            src={require('@/src/media/monarch-logo.png')}
                        />
                        <div className="topBar__content _ROW">
                            {this.renderNav()}
                            <div
                                className="topBar__action _CLICK _profile"
                                onClick={() => {
                                    appStore.getState().setPopup({ name: 'loginPopup' });
                                }}
                            >
                                личный кабинет
                            </div>
                            <div
                                className="topBar__action _CLICK _cheque"
                                onClick={() => {
                                    appStore.getState().setPopup({ name: 'chequePopup' });
                                }}
                            >
                                загрузить чек
                            </div>
                        </div>
                        <img
                            src={require('@/src/media/magnit-logo.png')}
                            className="topBar__logo _magnit"
                        />
                    </Media>
                    <Media check={(d) => d === 'mobile'}>
                        <div className="topBar__logos">
                            <img
                                className="topBar__logo _monarch"
                                src={require('@/src/media/monarch-logo.png')}
                            />
                            <img
                                src={require('@/src/media/magnit-logo.png')}
                                className="topBar__logo _magnit"
                            />
                        </div>
                        <img
                            className="topBar__profile"
                            src={require('@/src/media/user-icon.svg').default}
                            alt=""
                            onClick={() => {
                                AppRouter.changePage({ pageName: 'profile' });
                            }}
                        />
                    </Media>
                </div>
            </div>
        );
    }
}

export default TopBar;
