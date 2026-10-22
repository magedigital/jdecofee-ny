import React from 'react';

import Default from '@/src/components/default/Default.tsx';
import Icon from '@/src/components/icon/Icon.tsx';
import StringService from '@/src/services/string/String.service.ts';
import { StoreT, WithStore, appStore } from '@/src/store/store.tsx';

import CookiesI from './types.ts';

class Cookies extends Default<CookiesI['props'], CookiesI['state']> implements CookiesI {
    parent: CookiesI['parent'];

    constructor(props: CookiesI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    render() {
        const { mainContent } = this.props;

        return (
            <div ref={this.parent} className="cookies">
                <div className="cookies__inner">
                    <div
                        className="cookies__close _CLICK"
                        onClick={() => {
                            appStore.getState().setCookiesState(false);
                        }}
                    >
                        <Icon name="cookies-close" />
                    </div>
                    <h4 className="cookies__title">Используем куки</h4>
                    <p
                        className="cookies__text"
                        dangerouslySetInnerHTML={{
                            __html: new StringService().setSpaces(
                                `Данный сайт использует файлы-cookies, а также другие технологии для улучшения работы, совершенствования сервисов, определения пользовательских предпочтений и обеспечения безопасности. Продолжая работу с сайтом, Вы даете согласие на обработку файлов-cookies в соответствии с <a href="${mainContent?.docs?.policy}">Политикой в отношении обработки персональных данных</a>. При несогласии Вы можете отключить обработку файлов-cookies в настройках Вашего браузера или закрыть страницу сайта.`,
                            ),
                        }}
                    ></p>
                </div>
            </div>
        );
    }
}

const mapStore = (s: StoreT) => ({
    mainContent: s.mainContent,
});

export default WithStore(Cookies, mapStore);
