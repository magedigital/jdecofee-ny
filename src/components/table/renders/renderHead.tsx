import React from 'react';

import I from '../types.ts';

const renderHead: I['renderHead'] = function () {
    const { cols } = this.props;

    return (
        <div className="table__head">
            {Object.keys(cols).map((n) => (
                <div
                    className={this.getClass('table__headCol _COL', this.setClass(n))}
                    key={n}
                    style={{ width: `${this.getColWidth(n)}%` }}
                >
                    {cols[n].title}
                </div>
            ))}
        </div>
    );
};

export default renderHead;
