import React from 'react';

import Default from '@/src/components/default/Default.tsx';
import StringService from '@/src/services/string/String.service.ts';

import promoHandler from './methods/promoHandler.ts';

import PrizeI from './types.ts';

class Prize extends Default<PrizeI['props'], PrizeI['state']> implements PrizeI {
    parent: PrizeI['parent'];

    constructor(props: PrizeI['props']) {
        super(props);
        this.state = {};
        this.parent = React.createRef();
    }

    promoHandler = promoHandler;

    render() {
        const { prize } = this.props;

        return (
            <div ref={this.parent} className={`prize _FULL _${prize.status}`}>
                <div className="prize__head">
                    {prize.image && <img src={prize.image} alt="" className="prize__image" />}
                </div>
                <div className="prize__content">
                    <div
                        className={this.getClass(
                            'prize__status',
                            prize.status === 'DATA_NEEDED' && '_CLICK',
                        )}
                        onClick={() => {
                            if (prize.status === 'DATA_NEEDED') {
                                window.open(
                                    'https://forms.yandex.ru/cloud/6a1d664e068ff0f5ac394f78',
                                    '_blank',
                                );
                            }
                        }}
                    >
                        {prize.status_label}
                    </div>
                    <p
                        className="prize__title"
                        dangerouslySetInnerHTML={{
                            __html: new StringService().setSpaces(prize.title),
                        }}
                    ></p>
                </div>
            </div>
        );
    }
}

export default Prize;
