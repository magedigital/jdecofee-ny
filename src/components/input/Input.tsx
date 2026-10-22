import React from 'react';

import Default from '@/src/components/default/Default.tsx';

import changeHandler from './methods/changeHandler.ts';
import changePropsCb from './methods/changePropsCb.ts';
import focusHandler from './methods/focusHandler.ts';
import getReg from './methods/getReg.ts';
import init from './methods/init.ts';
import regsAddHandler from './methods/regsAddHandler.ts';
import regsDateAndTimeValidate from './methods/regsDateAndTimeValidate.ts';
import regsDateValidate from './methods/regsDateValidate.ts';
import regsDeleteHandler from './methods/regsDeleteHandler.ts';
import regsHandler from './methods/regsHandler.ts';
import regsTimeValidate from './methods/regsTimeValidate.ts';
import regsValidate from './methods/regsValidate.ts';
import saveCursorPositions from './methods/saveCursorPositions.ts';
import setCursorPositions from './methods/setCursorPositions.ts';

import InputI from './types.ts';

class Input extends Default<InputI['props'], InputI['state']> implements InputI {
    parent: InputI['parent'];
    input: InputI['input'];
    savedValue: InputI['savedValue'];

    constructor(props: InputI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
        this.input = React.createRef();
    }

    changingProps = ['reg' as const];

    init = init;

    changeHandler = changeHandler;

    getReg = getReg;
    regsHandler = regsHandler;
    regsDeleteHandler = regsDeleteHandler;
    regsAddHandler = regsAddHandler;
    regsValidate = regsValidate;
    regsDateValidate = regsDateValidate;
    regsTimeValidate = regsTimeValidate;
    regsDateAndTimeValidate = regsDateAndTimeValidate;

    focusHandler = focusHandler;
    saveCursorPositions = saveCursorPositions;
    setCursorPositions = setCursorPositions;

    changePropsCb = changePropsCb;

    render() {
        const { isFocus } = this.state;
        const { value, className, support, disabled, isArea, isPassword } = this.props;
        const Tag = isArea ? 'textarea' : 'input';

        return (
            <div
                ref={this.parent}
                className={this.getClass(
                    'input',
                    '_FULL',
                    className,
                    isFocus || value ? '_fill' : '',
                    isArea && '_area',
                )}
            >
                {support && (
                    <label htmlFor={this.id} className="input__support">
                        {support}
                    </label>
                )}

                <Tag
                    ref={this.input}
                    type={isPassword ? 'password' : 'text'}
                    className="input__field"
                    value={value}
                    onChange={this.changeHandler.bind(this)}
                    onSelect={this.saveCursorPositions.bind(this)}
                    onFocus={this.focusHandler.bind(this, true)}
                    onBlur={this.focusHandler.bind(this, false)}
                    id={this.id}
                    disabled={disabled}
                    autoComplete="off"
                />
            </div>
        );
    }
}

export default Input;
