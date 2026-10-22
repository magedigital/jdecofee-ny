import { ErrorT } from '../types';

const setError = function ({ text, type }: { text: string; type: ErrorT['type'] }): string {
    const id = `${new Date().getTime()}-${Math.random()}`;

    document.dispatchEvent(new CustomEvent('setError', { detail: { text, id, type } }));

    return id;
};

const deleteError = function ({ id }: { id: string }): void {
    document.dispatchEvent(new CustomEvent('setError', { detail: { id, action: 'delete' } }));
};

export { setError, deleteError };
