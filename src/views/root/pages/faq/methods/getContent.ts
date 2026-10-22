import { promo } from '@/src/index.tsx';

import { QuestionT } from '../components/question/types.ts';

import I from '../types.ts';

const getContent: I['getContent'] = async function () {
    const r = await promo.resources.getResources(['faq']);
    const data = r.faq?.value as { sections: { code: string; items: any[] }[] };
    const questions = (data?.sections?.find((s) => s.code === 'faq')?.items || []) as QuestionT[];

    await this.asyncSetState({ questions });
};

export default getContent;
