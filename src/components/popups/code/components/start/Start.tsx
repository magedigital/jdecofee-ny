import React from 'react';

import Button from '@/src/components/button/Button.tsx';
import Editor from '@/src/components/editor/Editor.tsx';
import Field from '@/src/components/field/Field.tsx';

import init from './methods/init.ts';
import sendForm from './methods/sendForm.ts';

import StartI from './types.ts';

class Start extends Editor<StartI['props'], StartI['state']> implements StartI {
    parent: StartI['parent'];

    constructor(props: StartI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    init = init;
    sendForm = sendForm;

    render() {
        const { form, loadingKey } = this.state;

        if (!form) {
            return;
        }

        return (
            <>
                <div className="popup__head _COL _COL_H_CENTER">
                    <div className="popup__title">регистрация кода</div>
                </div>
                <div className="popup__height _COL _COL_V_CENTER">
                    <div className="popup__form _FULL_W">
                        <div className="popup__formField _FULL_W">
                            <Field
                                type="input"
                                support="Введите код из-под крышки"
                                name="code"
                                value={form.code || ''}
                                setValue={async ({ value }) => {
                                    await this.setValue({
                                        data: { code: value },
                                        targetName: 'form',
                                    });
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="popup__buttons _ROW">
                    <div className="popup__button _fix">
                        <Button
                            onClick={this.sendForm.bind(this)}
                            className="_boldBorder _darkPinkColor"
                            loading={loadingKey === 'send'}
                        >
                            отправить
                        </Button>
                    </div>
                </div>
            </>
        );
    }
}

export default Start;
