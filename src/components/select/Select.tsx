import React from 'react';

import Default from '@/src/components/default/Default.tsx';

import setActive from './methods/setActive.ts';

import SelectI from './types.ts';

import renderField from './renders/renderField.tsx';
import renderList from './renders/renderList.tsx';

class Select extends Default<SelectI['props'], SelectI['state']> implements SelectI {
    parent: SelectI['parent'];

    constructor(props: SelectI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    setActive = setActive;

    renderField = renderField;
    renderList = renderList;

    render() {
        const { isActive } = this.state;
        const { className } = this.props;

        return (
            <div
                ref={this.parent}
                className={this.getClass('select', className, isActive ? '_active' : '')}
            >
                {this.renderField()}
                {this.renderList()}
            </div>
        );
    }
}

export default Select;
