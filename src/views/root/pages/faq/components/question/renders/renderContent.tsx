import React from 'react';

import InnerHtml from '@/src/components/innerHtml/InnerHtml.tsx';

import I from '../types.ts';

const renderContent: I['renderContent'] = function () {
    const { isActive, contentHeight } = this.state;
    const { question } = this.props;

    return (
        <div
            className="faqQuestion__content _FULL_W"
            style={{ height: isActive ? `${contentHeight}px` : '0px' }}
        >
            <InnerHtml
                className="faqQuestion__contentInner _FULL_W"
                text={question.description}
                disabled={!isActive}
            />
        </div>
    );
};

export default renderContent;
