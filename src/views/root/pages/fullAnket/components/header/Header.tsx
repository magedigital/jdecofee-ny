import React from 'react';

import Default from '@/src/components/default/Default.tsx';
import Form from '@/src/components/form/Form.tsx';
import { StoreT, WithStore } from '@/src/store/store.tsx';

import getUserData from './methods/getUserData.ts';
import init from './methods/init.ts';
import sendForm from './methods/sendForm.ts';
import uploadFile from './methods/uploadFile.ts';

import HeaderI from './types.ts';

import { fullAnketFields } from './static/fields.tsx';

class Header extends Default<HeaderI['props'], HeaderI['state']> implements HeaderI {
    parent: HeaderI['parent'];

    constructor(props: HeaderI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    init = init;

    getUserData = getUserData;

    uploadFile = uploadFile;
    sendForm = sendForm;

    render() {
        const { mainContent } = this.props;
        const userData = this.getUserData();

        return (
            <div ref={this.parent} className="anketHeader _SECTION">
                <div className="anketHeader__inner _INNER">
                    <div className="anketHeader__head _COL">
                        <h1 className="anketHeader__headTitle _TITLE">АНКЕТА</h1>
                        <p className="anketHeader__headText _TEXT">
                            Для получения приза заполните все поля и&nbsp;приложите необходимые
                            документы
                        </p>
                    </div>
                    <div className="anketHeader__content _COL _COL_CENTER">
                        <div className="anketHeader__contentInner">
                            <Form
                                data={userData}
                                fieldsKey={Object.keys(userData)
                                    .sort()
                                    .map((k) => userData[k])
                                    .filter((t) => t)
                                    .join('')}
                                fields={fullAnketFields({ mainContent })}
                                button={{ text: 'сохранить данные', className: '_mainColor' }}
                                request={this.sendForm.bind(this)}
                                uploadFile={this.uploadFile.bind(this)}
                                fieldClassName="_"
                                requiredText="* обязательные поля"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStore = (s: StoreT) => ({
    mainContent: s.mainContent,
});

export default WithStore(Header, mapStore);
