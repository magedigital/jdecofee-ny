import React from 'react';

import Default from '@/src/components/default/Default.tsx';
import List from '@/src/components/list/List.tsx';

import errorHandler from './methods/errorHandler.ts';
import init from './methods/init.ts';

import ErrorsI, { ErrorT } from './types.ts';

class Errors extends Default<ErrorsI['props'], ErrorsI['state']> implements ErrorsI {
    parent: ErrorsI['parent'];

    constructor(props: ErrorsI['props']) {
        super(props);
        this.state = {
            errors: [],
        };

        this.errorHandler = this.errorHandler.bind(this);

        this.parent = React.createRef();
    }

    timers = {};

    init = init;

    errorHandler = errorHandler;

    render() {
        const { errors } = this.state;
        const renderKey = errors.map((error) => error._id).join('');

        return (
            <div ref={this.parent} className="errors">
                <List
                    renderKey={renderKey}
                    items={errors}
                    parentClass="errors__list"
                    itemClass="errors__listItem"
                    itemStyleProps={['top']}
                    parentStyleProps={['width']}
                    parentRealStyleProps={['width']}
                    render={({ item }: { item: ErrorT }) => ({
                        item: <div className={`errors__item _${item.type}`}>{item.text}</div>,
                    })}
                    resizeWidth={true}
                />
            </div>
        );
    }
}

export default Errors;
