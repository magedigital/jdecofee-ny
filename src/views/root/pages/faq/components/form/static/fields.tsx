import React from 'react';

import { StoreT } from '@/src/store/store';

export const faqFields = (s: Pick<StoreT, 'mainContent'>) => {
    const { mainContent } = s;

    return {
        question: {
            type: 'input',
            support: 'Твой вопрос',
            input: {
                isArea: true,
            },
        },
        name: {
            type: 'input',
            support: 'Как тебя зовут',
            input: {},
        },
        email: {
            type: 'input',
            support: 'E-mail для получения ответа',
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
        personal: {
            type: 'checkbox',
            checkbox: {
                content: (
                    <>
                        Я соглашаюсь с{' '}
                        <a href={mainContent?.docs?.personal} rel="noreferrer" target="_blank">
                            условиями обработки персональных данных
                        </a>
                    </>
                ),
            },
        },
    } as const;
};
