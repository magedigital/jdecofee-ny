import React from 'react';

import I from '../types.ts';

import { getNav, onNav } from '../../../utils/getNav.ts';

const renderNav: I['renderNav'] = function () {
    const nav = getNav();

    return (
        <div className="topBar__nav _ROW _ROW_CENTER">
            {nav.map((item) => (
                <div
                    className={this.getClass('topBar__navItem', this.setClass(item.name))}
                    key={item.name}
                    onClick={() => onNav({ parent: this.parent.current!, item })}
                >
                    <div className="topBar__navLink _ROW _ROW_CENTER _CLICK">{item.text}</div>
                </div>
            ))}
        </div>
    );
};

export default renderNav;
