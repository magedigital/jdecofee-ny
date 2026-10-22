import DefaultI from '@/src/components/default/types';

type PropsT = {
    question: QuestionT & { key: number };
};

type StateT = {
    contentHeight?: number;
    isActive?: boolean;
};

type QuestionT = {
    name: string;
    description: string;
};

interface QuestionI extends DefaultI<PropsT, StateT> {
    resizeThrottle?: () => void;

    dropHandler(this: QuestionI, isActive?: boolean): Promise<void>;

    renderHead(this: QuestionI): React.ReactNode;
    renderContent(this: QuestionI): React.ReactNode;
}

export default QuestionI;
export type { QuestionT };
