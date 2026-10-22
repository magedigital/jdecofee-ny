import React from 'react';

import Icon from '@/src/components/icon/Icon.tsx';
import Media from '@/src/components/media/Media.tsx';

import I from '../types.ts';

const renderHead: I['renderHead'] = function () {
    return (
        <div className="popup__head _COL _COL_H_CENTER">
            <div className="popup__title">Вход в Личный кабинет</div>
            <p className="popup__description">Необходима авторизация</p>
            <Media check={(d) => d === 'desktop'}>
                <div className="closeBtn popup__close _CLICK" onClick={this.close.bind(this)}>
                    <Icon name="popup-close" />
                </div>
            </Media>
        </div>
    );
};

export default renderHead;
