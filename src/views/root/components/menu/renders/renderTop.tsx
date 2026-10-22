import React from 'react';

import I from '../types.ts';

import TopBar from '../../topBar/TopBar.tsx';

const renderTop: I['renderTop'] = function () {
    const { setState } = this.props;

    return (
        <div className="menu__top">
            <TopBar mode="menu" setMenuState={setState} />
        </div>
    );
};

export default renderTop;
