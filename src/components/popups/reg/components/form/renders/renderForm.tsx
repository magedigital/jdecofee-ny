import React from 'react';

import Checkbox from '@/src/components/checkbox/Checkbox.tsx';
import Field from '@/src/components/field/Field.tsx';

import I from '../types.ts';

const renderForm: I['renderForm'] = function () {
    const { form } = this.state;
    const { device, mainContent } = this.props;

    if (!form) {
        return;
    }

    return (
        <div className="popup__height _COL _COL_V_CENTER">
            <div className="popup__form _FULL_W">
                <div className="popup__formField _FULL_W">
                    <Field
                        type="input"
                        support={
                            device === 'desktop'
                                ? 'Адрес электронной почты (Ваш логин)'
                                : 'Email (Ваш логин)'
                        }
                        name="login"
                        value={form?.login || ''}
                        setValue={async ({ value }) => {
                            await this.setValue({ data: { login: value }, targetName: 'form' });
                        }}
                    />
                </div>
                <div className="popup__formField _FULL_W _checkbox">
                    <Checkbox
                        value={!!form.confirm}
                        onChange={async ({ value }) => {
                            await this.setValue({ data: { confirm: value }, targetName: 'form' });
                        }}
                    >
                        Я соглашаюсь с{' '}
                        <a href={mainContent?.docs?.personal} target="_blank" rel="noreferrer">
                            условиями обработки персональных данных
                        </a>
                    </Checkbox>
                </div>
            </div>
        </div>
    );
};

export default renderForm;
