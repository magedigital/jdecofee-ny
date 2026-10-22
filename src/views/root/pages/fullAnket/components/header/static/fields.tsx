import React from 'react';

import { StoreT } from '@/src/store/store';

export const fullAnketFields = (s: Pick<StoreT, 'mainContent'>) => {
    const { mainContent } = s;

    return {
        first_name: {
            type: 'input',
            support: 'Имя',
            input: {},
        },
        last_name: {
            type: 'input',
            support: 'Фамилия',
            input: {},
        },
        third_name: {
            type: 'input',
            support: 'Отчество',
            input: {},
        },
        inn: {
            type: 'input',
            support: 'ИНН',
            input: {},
        },
        snils: {
            type: 'input',
            support: 'СНИЛС',
            input: {},
        },
        passport_series_number: {
            type: 'input',
            support: 'Серия и номер паспорта',
            input: {},
        },
        passport_issue_date: {
            type: 'input',
            support: 'Дата выдачи паспорта',
            input: {},
        },
        passport_issued_by: {
            type: 'input',
            support: 'Кем выдан паспорт',
            input: {},
        },
        passport_address: {
            type: 'input',
            support: 'Адрес регистрации',
            input: {},
        },
        agreement: {
            type: 'checkbox',
            checkbox: {
                content: (
                    <>
                        Я соглашаюсь с{' '}
                        <a href={mainContent?.docs?.policy} rel="noreferrer" target="_blank">
                            политикой конфиденциальности
                        </a>
                    </>
                ),
            },
        },
    } as const;
};
