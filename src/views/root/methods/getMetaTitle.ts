import I from '../types.ts';

const getMetaTitle: I['getMetaTitle'] = function () {
    const { currentPopup } = this.props;
    let title = 'Добрый - Так звучит твоё лето';

    if (currentPopup) {
        if (currentPopup === 'codePopup') {
            title = 'Регистрация кода';
        } else if (currentPopup === 'loginPopup') {
            title = 'Авторизация';
        } else if (currentPopup === 'regPopup') {
            title = 'Получение пароля';
        } else if (currentPopup === 'chequePopup') {
            title = 'Регистрация чека';
        }
    }

    return title;
};

export default getMetaTitle;
