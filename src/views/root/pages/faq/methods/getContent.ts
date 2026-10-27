import { promo } from '@/src/index.tsx';

import { QuestionT } from '../components/question/types.ts';

import I from '../types.ts';

const getContent: I['getContent'] = async function () {
    const r = await promo.resources.getResources(['faq']);
    const data = r.faq?.value as { items: any[] };
    const questions = data.items as QuestionT[];

    await this.asyncSetState({ questions });
};

export default getContent;
