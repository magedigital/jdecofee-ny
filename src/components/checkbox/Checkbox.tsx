import React from 'react';

import Default from '@/src/components/default/Default.tsx';
import Icon from '@/src/components/icon/Icon.tsx';
import InnerHtml from '@/src/components/innerHtml/InnerHtml.tsx';

import CheckboxI from './types.ts';

class Checkbox extends Default<CheckboxI['props'], CheckboxI['state']> implements CheckboxI {
    parent: CheckboxI['parent'];

    constructor(props: CheckboxI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    render() {
        const { children, value, onChange, className, disabled } = this.props;

        return (
            <label className={this.getClass('checkbox', className)}>
                <input
                    type="checkbox"
                    className="checkbox__input"
                    checked={value}
                    onChange={() => {
                        onChange({ value: !value });
                    }}
                    disabled={disabled}
                />
                <div className="checkbox__view">
                    <div className="checkbox__box _COL _COL_CENTER">
                        <i className="checkbox__boxIcon">
                            <Icon name="check" />
                        </i>
                    </div>
                    {typeof children === 'string' ? (
                        <InnerHtml className="checkbox__viewInner" text={children} />
                    ) : (
                        <div className="checkbox__viewInner">{children}</div>
                    )}
                </div>
            </label>
        );
    }
}

export default Checkbox;
