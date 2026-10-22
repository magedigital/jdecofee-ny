import DefaultI from '@/src/components/default/types';

import { QuestionT } from '../question/types';

type PropsT = {
    questions: QuestionT[];
    is5ka?: boolean;
};

type StateT = {};

interface HeaderI extends DefaultI<PropsT, StateT> {}

export default HeaderI;
