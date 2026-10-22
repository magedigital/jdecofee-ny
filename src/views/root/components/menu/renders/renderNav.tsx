import React from 'react';

import { appStore } from '@/src/store/store.tsx';

import I from '../types.ts';

import { getNav, onNav } from '../../../utils/getNav.ts';

const renderNav: I['renderNav'] = function () {
    const { setState } = this.props;
    const nav = getNav();

    return (
        <div className="menu__nav _COL">
            {nav.map((i) => (
                <div
                    className={this.getClass(
                        'menu__navItem _CLICK _COL _COL_CENTER',
                        this.setClass(i.name),
                    )}
                    key={i.name}
                    onClick={() => {
                        onNav({ parent: this.parent.current!, item: i });

                        setState(false);
                    }}
                >
                    {i.text}
                </div>
            ))}
            <div className="menu__navButtons">
                <div
                    className="menu__navButton _ROW _ROW_CENTER _profile"
                    onClick={() => {
                        setState(false);
                        appStore.getState().setPopup({ name: 'loginPopup' });
                    }}
                >
                    личный кабинет
                </div>
                <div
                    className="menu__navButton _ROW _ROW_CENTER _cheque"
                    onClick={() => {
                        setState(false);
                        appStore.getState().setPopup({ name: 'chequePopup' });
                    }}
                >
                    Загрузить чек
                </div>
            </div>
        </div>
    );
};

export default renderNav;
