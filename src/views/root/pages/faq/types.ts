import PageI from '@/src/components/page/types';

import { QuestionT } from './components/question/types';

type PropsT = {
    is5ka?: boolean;
};

type StateT = {
    questions?: QuestionT[];
};

interface IndexI extends PageI<PropsT, StateT> {
    getContent(this: IndexI): Promise<void>;
}

export default IndexI;
