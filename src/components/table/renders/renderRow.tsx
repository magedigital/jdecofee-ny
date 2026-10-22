import React from 'react';

import Media from '@/src/components/media/Media.tsx';

import I from '../types.ts';

const renderRow: I['renderRow'] = function ({ item: r, index }) {
    const { isMobRows, cols, render } = this.props;

    return (
        <div className={this.getClass('table__row', index % 2 === 0 && '_even')} key={r.id}>
            <Media check={(d) => d === 'desktop' || !isMobRows}>
                {Object.keys(cols).map((n) => (
                    <div
                        className={this.getClass('table__rowCol _COL', this.setClass(n))}
                        key={n}
                        style={{ width: `${this.getColWidth(n)}%` }}
                    >
                        {render({ row: r, name: n })}
                    </div>
                ))}
            </Media>
            <Media check={(d) => d === 'mobile' && !!isMobRows}>
                <div className="table__rowMob">
                    {Object.keys(cols).map((n) => (
                        <div className={this.getClass('table__rowMobRow')} key={n}>
                            <div
                                className={this.getClass(
                                    'table__rowMobCol _head _COL',
                                    this.setClass(n),
                                )}
                                key={n}
                            >
                                {cols[n].title}
                            </div>
                            <div
                                className={this.getClass('table__rowMobCol _COL', this.setClass(n))}
                                key={n}
                            >
                                {render({ row: r, name: n })}
                            </div>
                        </div>
                    ))}
                </div>
            </Media>
        </div>
    );
};

export default renderRow;
