import React from 'react';

import Button from '@/src/components/button/Button';
import { appStore } from '@/src/store/store';

import { AppRouter } from '../../../../..';
import ChequePopupI from '../../types';

type PropsT = {
    setStep: ChequePopupI['setStep'];
};

export default function Final({ setStep }: PropsT): React.ReactNode {
    return (
        <>
            <div className="popup__head _COL _COL_H_CENTER">
                <div className="popup__title">Регистрация чека</div>
            </div>
            <div className="popup__final _FULL_W _COL _COL_H_CENTER _bottom">
                <div className="popup__finalTitle">Спасибо!</div>
                <div className="popup__finalText">
                    Ваш чек отправлен на проверку. <br className="_DESKTOP" />
                    Вы&nbsp;получите ответ на E-mail в&nbsp;течение 3-х дней.
                </div>
            </div>
            <div className="popup__buttons _ROW">
                <div className="popup__button _fix">
                    <Button
                        onClick={() => {
                            setStep('start', undefined);
                        }}
                        className="_whiteColor"
                    >
                        Загрузить ещё чек
                    </Button>
                </div>
                <div className="popup__button _fix">
                    <Button
                        onClick={() => {
                            appStore
                                .getState()
                                .closePopup({ name: 'chequePopup', pushHistory: false });
                            AppRouter.changePage({ pageName: 'profile' });

                            // if (window.Telegram) {
                            //     window.Telegram.WebApp?.close();
                            // }
                        }}
                        className="_mainColor"
                    >
                        Закрыть окно
                    </Button>
                </div>
            </div>
        </>
    );
}
