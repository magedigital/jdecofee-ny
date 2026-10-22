import React from 'react';

import Field from '@/src/components/field/Field.tsx';
import { FieldT } from '@/src/components/field/types.ts';

import I from '../types.ts';

import { chequeFormFields } from '../static/fields.ts';

const renderFields: I['renderFields'] = function () {
    const { form } = this.state;

    if (!form) {
        return;
    }

    return (
        <div className="popup__form _bottom">
            {(Object.keys(chequeFormFields) as (keyof typeof chequeFormFields)[]).map((name) => {
                const field = chequeFormFields[name] as FieldT;

                return (
                    <div className="popup__formField _short" key={name}>
                        <Field
                            {...field}
                            type="input"
                            name={name}
                            value={form[name] ?? ''}
                            setValue={async (d) => {
                                await this.setValue({
                                    data: { [name]: d.value },
                                    targetName: 'form',
                                });
                            }}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default renderFields;
