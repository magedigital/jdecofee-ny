import React from 'react';

import Default from '@/src/components/default/Default.tsx';

import changePropsCb from './methods/changePropsCb.ts';
import init from './methods/init.ts';

import InnerHtmlI from './types.ts';

class InnerHtml extends Default<InnerHtmlI['props'], InnerHtmlI['state']> implements InnerHtmlI {
    parent: InnerHtmlI['parent'];

    constructor(props: InnerHtmlI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    changingProps = ['disabled'];

    changePropsCb = changePropsCb;

    init = init;

    render() {
        const { className } = this.props;

        return <div ref={this.parent} className={this.getClass(className)} />;
    }
}

export default InnerHtml;
