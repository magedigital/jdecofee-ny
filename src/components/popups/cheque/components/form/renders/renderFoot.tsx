import React from 'react';

import Button from '@/src/components/button/Button.tsx';

import I from '../types.ts';

const renderFoot: I['renderFoot'] = function () {
    const { loadingKey } = this.state;

    return (
        <>
            {/* <Error error={error?.text} className="popup__error" callback={updateListRender} /> */}
            <div className="popup__buttons _FULL_W _ROW _ROW_CENTER">
                <div className="popup__button">
                    <Button
                        className="_mainColor"
                        onClick={this.sendForm.bind(this)}
                        loading={loadingKey === 'send'}
                    >
                        отправить на проверку
                    </Button>
                </div>
            </div>
        </>
    );
};

export default renderFoot;
