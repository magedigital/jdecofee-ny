import React from 'react';

import Table from '@/src/components/table/Table.tsx';

import I from '../types.ts';

import { chequesTableCols } from '../static/table.ts';

const renderCheques: I['renderCheques'] = function () {
    const { receipts = [] } = this.state;

    const checks = receipts.map((item) => ({
        ...item,
        _id: item.id,
    }));

    return (
        <div className="profile__cheques">
            <h3 className="profile__chequesTitle _TITLE _TITLE_MED">мои чеки</h3>
            <div className="profile__chequesTable">
                <Table
                    name="cheques"
                    render={this.renderTableCol.bind(this)}
                    rows={checks}
                    cols={chequesTableCols}
                    // renderEmpty={this.renderTableEmpty.bind(this)}
                    emptyId="empty"
                    isMobRows={true}
                />
            </div>
        </div>
    );
};

export default renderCheques;
