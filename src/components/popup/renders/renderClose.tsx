import React from 'react';

import Icon from '@/src/components/icon/Icon.tsx';

import I from '../types.ts';

const renderClose: I['renderClose'] = function () {
    return (
        <div
            className="closeBtn popup__close _COL _CLICK _COL_CENTER"
            onClick={this.close.bind(this)}
        >
            <Icon name="popup-close" />
        </div>
    );
};

export default renderClose;
