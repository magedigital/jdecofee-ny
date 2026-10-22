import React from 'react';

import DateService from '@/src/services/date/Date.service.ts';

import I from '../types.ts';

const renderTableCol: I['renderTableCol'] = function (this: I, { row, name }) {
    const { raffles } = this.state;
    const raffle = raffles?.find((r) => r.id === row.raffle_id);

    if (name === 'date') {
        return <>{new DateService().format(raffle?.publish_at, {})}</>;
    }

    if (name === 'phone') {
        return <>{row.phone}</>;
    }

    if (name === 'prize') {
        return <>{row.prize?.title || '–'}</>;
    }
};

export default renderTableCol;
