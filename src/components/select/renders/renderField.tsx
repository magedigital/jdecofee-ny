import React from 'react';

import Icon from '@/src/components/icon/Icon.tsx';

import I from '../types.ts';

const renderField: I['renderField'] = function () {
    const { value, list } = this.props;
    const currentItem = list.find((i) => i.id === value)?.title || '–';

    return (
        <div className="select__field _CLICK" onClick={() => this.setActive()}>
            <p className="select__fieldValue">{currentItem}</p>
            <Icon name="select-arrow" />
        </div>
    );
};

export default renderField;
