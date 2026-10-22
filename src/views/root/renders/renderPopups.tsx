import React from 'react';

import Fade from '@/src/components/fade/Fade.tsx';
import { popups } from '@/src/store/popups.ts';

import PopupWrapper from '../components/popupWrapper/PopupWrapper.tsx';

import I from '../types.ts';

const renderPopups: I['renderPopups'] = function () {
    const { currentPopup } = this.props;

    return (
        <>
            <Fade className={this.getClass('body__popupBack _FULL')} isShow={!!currentPopup} />

            {(Object.keys(popups) as (keyof typeof popups)[]).map((name) => {
                const popup = this.props[name];

                return <PopupWrapper key={name} name={name} isShow={popup.isShow} />;
            })}
        </>
    );
};

export default renderPopups;
