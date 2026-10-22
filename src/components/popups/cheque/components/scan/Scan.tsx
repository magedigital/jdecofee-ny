import React from 'react';

import Default from '@/src/components/default/Default.tsx';
import LoaderBlock from '@/src/components/loaderBlock/LoaderBlock.tsx';

import init from './methods/init.ts';
import setFrame from './methods/setFrame.ts';
import videoStart from './methods/videoStart.ts';
import videoStop from './methods/videoStop.ts';

import ScanI from './types.ts';

class Scan extends Default<ScanI['props'], ScanI['state']> implements ScanI {
    parent: ScanI['parent'];
    video: ScanI['video'];

    constructor(props: ScanI['props']) {
        super(props);
        this.state = {};

        this.video = React.createRef();
        this.parent = React.createRef();
    }

    init = init;

    videoStop = videoStop;
    videoStart = videoStart;
    setFrame = setFrame;

    render() {
        return (
            <div ref={this.parent} className="popup__stepInner _FULL">
                <div className="popup__head _COL _COL_H_CENTER">
                    <div className="popup__title">Регистрация чека</div>
                </div>
                <div className="popup__scan">
                    <video ref={this.video} className="popup__scanVideo" playsInline muted />
                    <LoaderBlock className="popup__scanLoader" isShow={true} loaderClassName="" />
                    <canvas hidden />
                </div>
            </div>
        );
    }
}

export default Scan;
