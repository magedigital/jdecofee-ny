import React from 'react';

import Button from '@/src/components/button/Button.tsx';
import Default from '@/src/components/default/Default.tsx';
import Form from '@/src/components/form/Form.tsx';

import downloadAkt from './methods/downloadAkt.ts';
import getPrizeId from './methods/getPrizeId.ts';
import resetAkt from './methods/resetAkt.ts';
import sendForm from './methods/sendForm.ts';

import HeaderI from './types.ts';

import { aktFields } from './static/fields.tsx';

class Header extends Default<HeaderI['props'], HeaderI['state']> implements HeaderI {
    parent: HeaderI['parent'];

    constructor(props: HeaderI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    formData = new FormData();

    getPrizeId = getPrizeId;

    sendForm = sendForm;
    downloadAkt = downloadAkt;
    resetAkt = resetAkt;

    render() {
        const { loadingKey } = this.state;

        return (
            <div ref={this.parent} className="anketHeader _SECTION">
                <div className="anketHeader__inner _INNER">
                    <div className="anketHeader__head _COL">
                        <h1 className="anketHeader__headTitle _TITLE">Запрос акта</h1>
                        <p className="anketHeader__headText _TEXT">
                            Вам необходимо скачать акт, подписать его,
                            <br className="_DESKTOP" />
                            отсканировать и&nbsp;загрузить в форме ниже:
                        </p>
                        <div className="anketHeader__headButton">
                            <Button
                                className="_mainColor"
                                onClick={this.downloadAkt.bind(this)}
                                loading={loadingKey === 'download'}
                            >
                                скачать акт
                            </Button>
                        </div>
                    </div>
                    <div className="anketHeader__content">
                        <Form
                            fields={aktFields}
                            button={{
                                text: 'Отправить на проверку',
                                className: '_mainColor',
                            }}
                            request={this.sendForm.bind(this)}
                            uploadFile={async ({ file }) => {
                                this.formData.set('act', file);
                            }}
                            fieldClassName="_"
                            requiredText="* обязательные поля"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
