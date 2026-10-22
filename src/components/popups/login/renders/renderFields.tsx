import React from 'react';

import Field from '@/src/components/field/Field.tsx';
import { appStore } from '@/src/store/store.tsx';

import I from '../types.ts';

const renderFields: I['renderFields'] = function () {
    const { form } = this.state;
    const { device } = this.props;

    if (!form) {
        return;
    }

    return (
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
                    value={form.login || ''}
                    setValue={async ({ value }) => {
                        await this.setValue({ data: { login: value }, targetName: 'form' });
                    }}
                />
            </div>
            <div className="popup__formField _FULL_W _COL">
                <div className="popup__formFieldBox _FULL_W">
                    <Field
                        type="input"
                        support="Пароль"
                        name="password"
                        value={form.password || ''}
                        setValue={async ({ value }) => {
                            await this.setValue({ data: { password: value }, targetName: 'form' });
                        }}
                        input={{
                            isPassword: true,
                        }}
                    />
                </div>
                <div
                    className="popup__formFieldLink _CLICK"
                    onClick={() => {
                        appStore.getState().setPopup({ name: 'regPopup' });
                    }}
                >
                    Забыли пароль?
                </div>
            </div>
        </div>
    );
};

export default renderFields;
