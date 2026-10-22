import React from 'react';

import Button from '@/src/components/button/Button.tsx';
import { appStore } from '@/src/store/store.tsx';

import I from '../types.ts';

const renderFoot: I['renderFoot'] = function () {
    const { loadingKey } = this.state;

    return (
        <div className="popup__foot _FULL_W _COL _COL_H_CENTER">
            <div className="popup__buttons _FULL_W _ROW _ROW_H_CENTER">
                <div className="popup__button _fix">
                    <Button
                        className="_whiteColor"
                        onClick={() => {
                            appStore.getState().setPopup({ name: 'regPopup' });
                        }}
                    >
                        Регистрация
                    </Button>
                </div>
                <div className="popup__button _fix">
                    <Button
                        className="_mainColor"
                        onClick={this.sendForm.bind(this)}
                        loading={loadingKey === 'send'}
                    >
                        Войти
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default renderFoot;
