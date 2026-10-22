import React from 'react';

import Default from '@/src/components/default/Default.tsx';

import getColWidth from './methods/getColWidth.ts';

import TableI from './types.ts';

import renderContent from './renders/renderContent.tsx';
import renderHead from './renders/renderHead.tsx';
import renderRow from './renders/renderRow.tsx';

class Table extends Default<TableI['props'], TableI['state']> implements TableI {
    parent: TableI['parent'];

    constructor(props: TableI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    getColWidth = getColWidth;

    renderHead = renderHead;
    renderContent = renderContent;
    renderRow = renderRow;

    render() {
        const { name } = this.props;

        return (
            <div ref={this.parent} className={this.getClass('table', this.setClass(name))}>
                {this.renderHead()}
                {this.renderContent()}
            </div>
        );
    }
}

export default Table;
