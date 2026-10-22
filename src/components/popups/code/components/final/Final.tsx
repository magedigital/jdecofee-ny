import React from 'react';

import Button from '@/src/components/button/Button';

import ChequePopupI from '../../types';

type PropsT = {
    setStep: ChequePopupI['setStep'];
    close: () => void;
};

export default function Final({ setStep, close }: PropsT): React.ReactNode {
    return (
        <>
            <div className="popup__head _COL _COL_H_CENTER">
                <div className="popup__title">Регистрация кода</div>
            </div>
            <div className="popup__final _FULL_W _COL _COL_H_CENTER _bottom">
                <div className="popup__finalTitle">Код принят</div>
                <div className="popup__finalText">Начислен 1 балл</div>
            </div>
            <div className="popup__buttons _ROW">
                <div className="popup__button _fix">
                    <Button
                        onClick={() => {
                            setStep('start');
                        }}
                        className="_boldBorder _darkPinkColor"
                    >
                        ещё код
                    </Button>
                </div>
                <div className="popup__button _fix">
                    <Button
                        onClick={() => {
                            close();

                            // if (window.Telegram) {
                            //     window.Telegram.WebApp?.close();
                            // }
                        }}
                        className="_boldBorder _purpleColor"
                    >
                        Закрыть окно
                    </Button>
                </div>
            </div>
        </>
    );
}
