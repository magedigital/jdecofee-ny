import { PageNamesT } from '@/src/services/router/static/pages.ts';

import I from '../types.ts';

import { AppRouter } from '../../../index.tsx';

const getPages: I['getPages'] = function (all) {
    const { pages } = this.state;
    const { storePages } = this.props;

    return pages
        .filter((pageName) => all || storePages[pageName].isShow)
        .map((pageName) => {
            const page = AppRouter.pages[pageName];
            const idPageName = `${pageName}-id` as PageNamesT;
            let idPageId = idPageName ? storePages[idPageName]?.id : undefined;

            if (page.withId) {
                idPageId = storePages[pageName]?.id;
            }

            return {
                _id: idPageId ? [pageName, idPageId].join('-') : pageName,
                pageName,
                ...page,
                id: idPageId,
            };
        });
};

export default getPages;
