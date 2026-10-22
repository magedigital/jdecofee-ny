import React from 'react';

import CodeInputs from '@/src/components/codeInputs/CodeInputs.tsx';

import I from '../types.ts';

const renderForm: I['renderForm'] = function () {
    const { loadingKey } = this.state;
    const { login, isConfirm, mailService } = this.props;
    const LinkTag = mailService ? 'a' : 'span';
    const linkProps = mailService ? { href: mailService, target: '_blank' } : {};

    return (
        <div className="popup__code _COL _COL_H_CENTER">
            <div className="popup__codeText _COL _COL_H_CENTER">
                Мы отправили сообщение <br className="_MOBILE" />
                на&nbsp;твой адрес:
                <div className="popup__codeEmail">{login}</div>
                <span>
                    Пожалуйста, <LinkTag {...linkProps}>проверь почтовый ящик</LinkTag>
                    <br className="_DESKTOP" />и введи код{' '}
                    {isConfirm ? ':' : 'для сброса пароля ниже:'}
                </span>
            </div>
            <div className="popup__codeInputs">
                <CodeInputs
                    length={6}
                    loading={loadingKey === 'send'}
                    callback={async (code) => {
                        await this.sendForm(code);
                    }}
                />
            </div>
        </div>
    );
};

export default renderForm;
