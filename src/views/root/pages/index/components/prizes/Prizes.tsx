import React from 'react';

import Default from '@/src/components/default/Default.tsx';

import PrizesI from './types.ts';

class Prizes extends Default<PrizesI['props'], PrizesI['state']> implements PrizesI {
    parent: PrizesI['parent'];

    constructor(props: PrizesI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    render() {
        return (
            <div ref={this.parent} className="indexPrizes _SECTION" data-ancor="prizes">
                <div className="indexPrizes__inner _INNER">
                    <h3 className="indexPrizes__title _TITLE">Главный приз</h3>
                    <div className="indexPrizes__mainPrize">
                        <div className="indexPrizes__mainPrizeContent _COL">
                            <div className="indexPrizes__mainPrizeContentInner">
                                <h4 className="indexPrizes__mainPrizeContentTitle">
                                    Билеты
                                    <br />в новогоднее путешествие
                                </h4>
                            </div>
                        </div>
                    </div>
                    <p className="indexPrizes__subTitle">Электронный сертификат на 200 000 ₽</p>
                    <h3 className="indexPrizes__title _TITLE">ЕЖЕНЕДЕЛЬНЫЕ ПРИЗЫ</h3>
                    <div className="indexPrizes__weekPrizes">
                        <div className="indexPrizes__weekPrizesCard">
                            <div className="indexPrizes__weekPrize _COL">
                                <div className="indexPrizes__weekPrizeTitle">
                                    <div className="indexPrizes__weekPrizeTitleCount _COL">
                                        <span>2</span>шт.
                                    </div>
                                    <div className="indexPrizes__weekPrizeTitleInner">
                                        каждую
                                        <br />
                                        неделю
                                    </div>
                                </div>
                                <p className="indexPrizes__weekPrizeText">Номинал 10 000 ₽</p>
                            </div>
                        </div>
                        <div className="indexPrizes__weekPrizesCard">
                            <div className="indexPrizes__weekPrize _COL">
                                <div className="indexPrizes__weekPrizeTitle">
                                    <div className="indexPrizes__weekPrizeTitleCount _COL">
                                        <span>30</span>шт.
                                    </div>
                                    <div className="indexPrizes__weekPrizeTitleInner">
                                        каждую
                                        <br />
                                        неделю
                                    </div>
                                </div>
                                <p className="indexPrizes__weekPrizeText">Номинал 4 000 ₽</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Prizes;
