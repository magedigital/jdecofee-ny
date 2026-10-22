import React from 'react';

import Button from '@/src/components/button/Button.tsx';
import { appStore } from '@/src/store/store.tsx';

import I from '../types.ts';

const renderFoot: I['renderFoot'] = function () {
    const { loadingKey } = this.state;
    const { isConfirm } = this.props;

    return (
        <div className="popup__foot _FULL_W _COL _COL_H_CENTER">
            <div className="popup__buttons _FULL_W _ROW _ROW_H_CENTER">
                {!isConfirm && (
                    <div className="popup__button _fix">
                        <Button
                            className="_whiteColor"
                            onClick={() => {
                                appStore.getState().setPopup({ name: 'loginPopup' });
                            }}
                        >
                            личный кабинет
                        </Button>
                    </div>
                )}

                <div className="popup__button _fix">
                    <Button
                        className="_mainColor"
                        onClick={this.sendForm.bind(this)}
                        loading={loadingKey === 'send'}
                    >
                        {isConfirm ? 'Получить код' : 'Получить пароль'}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default renderFoot;
