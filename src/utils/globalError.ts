import { ApiError } from '@promoinstance/sdk';

import { setError } from '../views/root/components/errors/utils/errorHandler';

export const globalError = (e: unknown): void => {
    if (e instanceof ApiError) {
        let errorText = e.message;

        if (e.details?.length) {
            errorText = e.details.map((d) => d.issue).join(', ');
        }

        if (!errorText) {
            errorText = 'Неизвестная ошибка';
        }

        setError({ text: errorText, type: 'error' });
    }
};
