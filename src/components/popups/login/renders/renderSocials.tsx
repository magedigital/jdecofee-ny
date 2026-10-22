import React from 'react';

import I from '../types.ts';

import { loginSocials } from '../static/socials.ts';

const renderSocials: I['renderSocials'] = function () {
    const socAuthUrls = window.socAuthUrls;

    return (
        <div className="popup__socials">
            <p className="popup__socialsTitle">Авторизоваться через</p>
            <div className="popup__socialsItems _ROW">
                {(Object.keys(loginSocials) as (keyof typeof loginSocials)[]).map((name) => {
                    let href: string | undefined;

                    if (name === 'vk') {
                        href = socAuthUrls?.VK;
                    }

                    if (name === 'mail') {
                        href = socAuthUrls?.MailRU;
                    }

                    if (name === 'ya') {
                        href = socAuthUrls?.Yandex;
                    }

                    if (name === 'ok') {
                        href = socAuthUrls?.OK;
                    }

                    return (
                        <span
                            className="popup__socialsItem _CLICK _COL _COL_CENTER"
                            key={name}
                            onClick={() => {
                                const hrefWindow = window.open(href, '_blank');

                                this.timers[name] = setInterval(() => {
                                    if (hrefWindow && hrefWindow.closed) {
                                        clearInterval(this.timers[name]);

                                        window.location.reload();
                                    }
                                }, 500);
                            }}
                        ></span>
                    );
                })}
            </div>
        </div>
    );
};

export default renderSocials;
