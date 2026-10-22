import React from 'react';

import { appStore } from '@/src/store/store';

export const aktFields = {
    act: {
        support: 'Скан подписанного акта',
        type: 'file',
    },
    policy: {
        type: 'checkbox',
        checkbox: {
            content: (
                <>
                    Я соглашаюсь с{' '}
                    <a
                        href={appStore.getState().mainContent?.docs?.policy}
                        rel="noreferrer"
                        target="_blank"
                    >
                        политикой конфиденциальности
                    </a>{' '}
                    и&nbsp;условиями обработки персональных данных*
                </>
            ),
        },
    },
} as const;
