export const chequeFormFields = {
    date: {
        support: 'Дата на чеке',
        input: {
            support: '__.__.____',
            reg: 'date',
        },
    },
    time: {
        support: 'Время на чеке',
        input: {
            support: '__:__',
            reg: 'time',
        },
    },
    amount: {
        support: 'Сумма на чеке',
        input: {
            isAmount: true,
        },
    },
    fn: {
        support: 'ФН',
        input: {
            regExp: /\D/gi,
        },
    },
    fp: {
        support: 'ФП',
        input: {
            regExp: /\D/gi,
        },
    },
    fd: {
        support: 'ФД',
        input: {
            regExp: /\D/gi,
        },
    },
} as const;
