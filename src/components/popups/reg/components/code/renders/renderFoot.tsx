import React from 'react';

import Button from '@/src/components/button/Button.tsx';

import I from '../types.ts';

const renderFoot: I['renderFoot'] = function () {
    const { loadingKey, isSendAgain } = this.state;

    return (
        <div className="popup__foot _FULL_W _COL _COL_H_CENTER">
            {/* <Error className="popup__error" error={error?.text} callback={updateListRender} /> */}
            <div className="popup__buttons _FULL_W _ROW _ROW_H_CENTER">
                <div className="popup__button">
                    <Button
                        className="_mainColor"
                        onClick={this.sendAgainReg.bind(this)}
                        loading={loadingKey === 'again'}
                        disabled={!!isSendAgain}
                    >
                        Отправить код повторно
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default renderFoot;
