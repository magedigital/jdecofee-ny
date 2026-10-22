import I from '../types.ts';

const getPrevPageData: I['getPrevPageData'] = function (url, pageName) {
    const prevPageUrl = url;

    return {
        ...(prevPageUrl ? { href: prevPageUrl } : { pageName: pageName! }),
    };
};

export default getPrevPageData;
