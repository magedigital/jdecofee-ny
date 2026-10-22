import React from 'react';

import Default from '@/src/components/default/Default.tsx';

import dropHandler from './methods/dropHandler.ts';
import init from './methods/init.ts';

import QuestionI from './types.ts';

import renderContent from './renders/renderContent.tsx';
import renderHead from './renders/renderHead.tsx';

class Question extends Default<QuestionI['props'], QuestionI['state']> implements QuestionI {
    parent: QuestionI['parent'];
    resizeThrottle: QuestionI['resizeThrottle'];

    constructor(props: QuestionI['props']) {
        super(props);
        this.state = {};

        this.init = this.init!.bind(this);

        this.parent = React.createRef();
    }

    dropHandler = dropHandler;
    init = init;

    renderHead = renderHead;
    renderContent = renderContent;

    render() {
        const { isActive } = this.state;

        return (
            <div ref={this.parent} className={`faqQuestion _FULL_W ${isActive ? '_active' : ''}`}>
                {this.renderHead()}
                {this.renderContent()}
            </div>
        );
    }
}

export default Question;
