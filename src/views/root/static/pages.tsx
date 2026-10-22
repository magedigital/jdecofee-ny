import React from 'react';

import I from '../types.ts';

import Anket from '../pages/anket/Anket.tsx';
import Faq from '../pages/faq/Faq.tsx';
import FullAnket from '../pages/fullAnket/FullAnket.tsx';
import Index from '../pages/index/Index.tsx';
import Profile from '../pages/profile/Profile.tsx';
import Winners from '../pages/winners/Winners.tsx';

export const rootPages = {
    index: {
        render(this: I) {
            return <Index />;
        },
    },
    winners: {
        render(this: I) {
            return <Winners />;
        },
    },
    faq: {
        render(this: I) {
            return <Faq />;
        },
    },
    anket: {
        render(this: I) {
            return <Anket />;
        },
    },
    profile: {
        render(this: I) {
            return <Profile />;
        },
    },
    // akt: {
    //     render(this: I) {
    //         return <Akt />;
    //     },
    // },
    fullAnket: {
        render(this: I) {
            return <FullAnket />;
        },
    },
} as const;
