import React from 'react';

import { StoreT } from '@/src/store/store';

export const anketFields = (s: Pick<StoreT, 'mainContent'>) => {
    const { mainContent } = s;

    return {
        firstName: {
            type: 'input',
            support: 'Имя*',
        },
        lastName: {
            type: 'input',
            support: 'Фамилия*',
        },
        phone: {
            type: 'input',
            support: 'Номер мобильного телефона*',
            input: {
                reg: 'phone',
            },
        },
        password: {
            type: 'input',
            support: 'Пароль*',
            input: {
                isPassword: true,
            },
        },
        password2: {
            type: 'input',
            support: 'Повтор пароля*',
            input: {
                isPassword: true,
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
                        *
                    </>
                ),
            },
        },
        mailing: {
            type: 'checkbox',
            checkbox: {
                content: <>Я соглашаюсь получать рассылку с новостями акции</>,
            },
        },
    } as const;
};
