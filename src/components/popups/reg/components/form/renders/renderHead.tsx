import React from 'react';

import I from '../types.ts';

const renderHead: I['renderHead'] = function () {
    const { isConfirm } = this.props;

    return (
        <div className="popup__head _COL _COL_H_CENTER">
            <div className="popup__title">
                {isConfirm ? 'Необходимо подтвердить Email' : 'Получение пароля'}
            </div>
            {!isConfirm && (
                <p className="popup__description">
                    Если Вы ещё не&nbsp;регистрировались <br className="_DESKTOP" />
                    или забыли пароль для&nbsp;входа в&nbsp;Личный кабинет
                </p>
            )}
        </div>
    );
};

export default renderHead;
