import React from 'react';

import Default from '@/src/components/default/Default.tsx';
import { AppRouter } from '@/src/index.tsx';
import { StoreT, WithStore, appStore } from '@/src/store/store.tsx';

import ProfileMainI from './types.ts';

import requestLogout from './requests/requestLogout.ts';

class ProfileMain
    extends Default<ProfileMainI['props'], ProfileMainI['state']>
    implements ProfileMainI
{
    parent: ProfileMainI['parent'];

    constructor(props: ProfileMainI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    requestLogout = requestLogout;

    render() {
        const { authUser } = this.props;

        return (
            <div ref={this.parent} className="profileMain _FULL _BACK">
                <div className="profileMain__top">
                    <p className="profileMain__name">
                        {[authUser?.first_name, authUser?.last_name].filter((t) => t).join(' ') ||
                            '–'}
                    </p>
                    <div className="profileMain__id">ID {authUser?.participant_code}</div>
                </div>
                <div className="profileMain__actions">
                    <div className="profileMain__action _change">
                        <div
                            className="profileMain__actionInner _CLICK"
                            onClick={() => {
                                AppRouter.changePage({ pageName: 'anket' });
                            }}
                        >
                            Изменить данные
                        </div>
                    </div>
                    <div className="profileMain__action _cheque">
                        <div
                            className="profileMain__actionInner _CLICK"
                            onClick={() => {
                                appStore.getState().setPopup({ name: 'chequePopup' });
                            }}
                        >
                            Загрузить чек
                        </div>
                    </div>
                    <div className="profileMain__action _exit">
                        <div
                            className="profileMain__actionInner _CLICK"
                            onClick={this.requestLogout.bind(this)}
                        >
                            Выход
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStore = (s: StoreT) => ({
    authUser: s.authUser,
});

export default WithStore(ProfileMain, mapStore);
