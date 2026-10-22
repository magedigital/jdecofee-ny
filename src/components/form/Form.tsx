import React from 'react';

import Button from '@/src/components/button/Button.tsx';
import Editor from '@/src/components/editor/Editor.tsx';
import Field from '@/src/components/field/Field.tsx';
import Media from '@/src/components/media/Media.tsx';

import changePropsCb from './methods/changePropsCb.ts';
import init from './methods/init.ts';
import sendForm from './methods/sendForm.ts';

import FormI from './types.ts';

class Form extends Editor<FormI['props'], FormI['state']> implements FormI {
    parent: FormI['parent'];

    constructor(props: FormI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    changingProps = ['fieldsKey'];

    changePropsCb = changePropsCb;

    init = init;

    sendForm = sendForm;

    render() {
        const { form, loadingKey } = this.state;
        const { fields, fieldsList, button, fieldClassName, requiredText, uploadFile, disabled } =
            this.props;

        if (!form) {
            return;
        }

        const resultFieldsList = fieldsList || Object.keys(fields);

        return (
            <div ref={this.parent} className="form _FULL_W _COL">
                <div className="form__fields">
                    {resultFieldsList.map((n, i) => (
                        <div
                            className="form__field"
                            key={n}
                            style={{ zIndex: resultFieldsList.length - i }}
                        >
                            <Field
                                {...fields[n]}
                                name={n}
                                value={form[n] ?? ''}
                                setValue={async ({ value, name }) => {
                                    await this.setValue({
                                        data: { [name || n]: value },
                                        targetName: 'form',
                                    });
                                }}
                                uploadFile={uploadFile}
                                className={this.getClass('_formField', fieldClassName)}
                                disabled={disabled}
                                data={{ ...form }}
                            />
                        </div>
                    ))}
                </div>
                {requiredText && <div className="form__required">{requiredText}</div>}
                {/* <Error className="form__error" error={error?.text} /> */}
                <div className="form__button">
                    <Media check={(d) => d === 'desktop'}>
                        <Button
                            className={this.getClass(button.className, '_bigSize')}
                            onClick={this.sendForm.bind(this)}
                            loading={loadingKey === 'send'}
                        >
                            {button.text}
                        </Button>
                    </Media>
                    <Media check={(d) => d === 'mobile'}>
                        <Button
                            className={this.getClass(button.className, '_mediumSize')}
                            onClick={this.sendForm.bind(this)}
                            loading={loadingKey === 'send'}
                        >
                            {button.text}
                        </Button>
                    </Media>
                </div>
            </div>
        );
    }
}

export default Form;
