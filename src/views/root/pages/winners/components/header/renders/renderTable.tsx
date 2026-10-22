import React from 'react';

import Table from '@/src/components/table/Table.tsx';

import I from '../types.ts';

import { winnerTableCols } from '../static/table.ts';

const renderTable: I['renderTable'] = function () {
    const { winners = [], searchPhone, searchWeek, isLoading } = this.state;

    return (
        <>
            <div className="winners__table">
                <div className="winners__tableInner">
                    <Table
                        name="winners"
                        rows={winners.map((w) => ({ ...w, _id: w.id }))}
                        cols={winnerTableCols}
                        render={this.renderTableCol.bind(this)}
                        isMobRows={true}
                        emptyId={searchPhone?.length === 4 ? 'phone' : searchWeek || 'empty'}
                        renderEmpty={this.renderTableEmpty.bind(this)}
                        loading={!!isLoading}
                    />
                </div>
            </div>
        </>
    );
};

export default renderTable;
