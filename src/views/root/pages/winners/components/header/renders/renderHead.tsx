import React from 'react';

import I from '../types.ts';

const renderHead: I['renderHead'] = function () {
    return (
        <div className="winners__head _COL">
            <h3 className="winners__headTitle _TITLE _inner">ПОБЕДИТЕЛИ РОЗЫГРЫШЕЙ</h3>
        </div>
    );
};

export default renderHead;
