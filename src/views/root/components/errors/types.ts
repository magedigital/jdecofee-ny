import DefaultI from '@/src/components/default/types';

type PropsT = {};

type StateT = {
    errors: ErrorT[];
};

type ErrorT = { _id: string; text: string; type: 'error' | 'success' | 'info' };

interface ErrorsI extends DefaultI<PropsT, StateT> {
    timers: Record<string, ReturnType<typeof setTimeout>>;

    errorHandler(e: {
        detail: { id: string; text?: string; action?: 'delete'; type: ErrorT['type'] };
    }): Promise<void>;
}

export default ErrorsI;
export type { ErrorT };
