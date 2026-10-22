import React from 'react';

import Default from '@/src/components/default/Default.tsx';
import List from '@/src/components/list/List.tsx';
import StringService from '@/src/services/string/String.service.ts';

import ErrorI from './types.ts';

class Error extends Default<ErrorI['props'], ErrorI['state']> implements ErrorI {
    parent: ErrorI['parent'];

    constructor(props: ErrorI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    render() {
        const { error, className, errorClassName, callback } = this.props;

        return (
            <div className={this.getClass(className, '_ERROR', error ? '' : '_empty')}>
                <List
                    renderKey={error}
                    items={error ? [{ _id: encodeURIComponent(error), error }] : []}
                    parentClass={this.getClass('error', errorClassName)}
                    itemClass="error__item"
                    itemStyleProps={['top']}
                    parentStyleProps={['width']}
                    parentRealStyleProps={['width']}
                    render={({ item }) => ({
                        item: (
                            <div
                                className="error__text"
                                dangerouslySetInnerHTML={{
                                    __html: new StringService().setSpaces(item.error),
                                }}
                            ></div>
                        ),
                    })}
                    callback={callback}
                />
            </div>
        );
    }
}

export default Error;
