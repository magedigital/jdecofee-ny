import React from 'react';

import DateService from '@/src/services/date/Date.service.ts';

import I from '../types.ts';

const renderTableEmpty: I['renderTableEmpty'] = function (this: I, { id }) {
    if (id === 'empty') {
        return (
            <>
                <h3>Победителей пока нет</h3>
                <p>Выберите неделю</p>
            </>
        );
    }

    if (id === 'phone') {
        return (
            <>
                <h3>Победители не найдены</h3>
                <p>Попробуйте изменить критерии поиска</p>
            </>
        );
    }

    const { raffles } = this.state;
    const raffle = (raffles || []).find((r) => r.id === id);

    if (raffle) {
        return (
            <>
                <h3>Победителей пока нет</h3>
                <p>Они будут объявлены {new DateService().format(raffle.publish_at, {})}</p>
            </>
        );
    }

    return (
        <>
            <h3>Победители не найдены</h3>
            <p>Попробуйте изменить критерии поиска</p>
        </>
    );
};

export default renderTableEmpty;
