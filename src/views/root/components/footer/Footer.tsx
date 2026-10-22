import React from 'react';

import Default from '@/src/components/default/Default.tsx';
import Link from '@/src/components/link/Link.tsx';
import StringService from '@/src/services/string/String.service.ts';
import { StoreT, WithStore } from '@/src/store/store.tsx';

import FooterI from './types.ts';

class Footer extends Default<FooterI['props'], FooterI['state']> implements FooterI {
    parent: FooterI['parent'];

    constructor(props: FooterI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    render() {
        const { mainContent, className, mode } = this.props;

        return (
            <div
                ref={this.parent}
                className={this.getClass('footer', className, this.setClass(mode))}
            >
                {mode === 'inner' && (
                    <>
                        <img
                            className="footer__decor _1"
                            src={require('@/src/media/decor-bg2.png')}
                        />
                        <img
                            className="footer__decor _2"
                            src={require('@/src/media/decor-bg1.png')}
                        />
                    </>
                )}
                <div className="footer__wrapper _SECTION">
                    <div className="footer__inner _INNER">
                        <div className="footer__nav _ROW _ROW_CENTER">
                            <a
                                href={mainContent?.docs?.policy}
                                target="_blank"
                                rel="noreferrer"
                                className="footer__navLink _CLICK"
                            >
                                Политика конфиденциальности
                            </a>
                            <a
                                href={mainContent?.docs?.rules}
                                target="_blank"
                                rel="noreferrer"
                                className="footer__navLink _CLICK"
                            >
                                ПРАВИЛА АКЦИИ
                            </a>
                            <Link pageName="faq" className="footer__navLink _CLICK">
                                ОБРАТНАЯ СВЯЗЬ
                            </Link>
                        </div>
                        <p
                            className="footer__text"
                            dangerouslySetInnerHTML={{
                                __html: new StringService().setSpaces(
                                    mainContent?.footerDisclaimer,
                                ),
                            }}
                        ></p>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStore = (s: StoreT) => ({
    mainContent: s.mainContent,
});

export default WithStore(Footer, mapStore);
