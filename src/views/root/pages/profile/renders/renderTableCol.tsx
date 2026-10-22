import React from 'react';

import I from '../types.ts';

const renderTableCol: I['renderTableCol'] = function ({ row, name }) {
    if (name === 'date') {
        return <>{row.registered_at}</>;
    }

    if (name === 'fd') {
        return <>{row.fd}</>;
    }

    if (name === 'status') {
        return <>{row.status_label}</>;
    }

    if (name === 'result') {
        if (row.status === 'REFUSED') {
            return <>{row.refuse_reason_label || '–'}</>;
        }

        return '–';
    }
};

export default renderTableCol;
