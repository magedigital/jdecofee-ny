import React from 'react';

import I from '../types.ts';

const renderContent: I['renderContent'] = function (this: I) {
    return (
        <div className="popup__innerBox">
            <div className="popup__content _FULL_W">
                {this.renderHead()}
                {this.renderFields()}
                {this.renderFoot()}
            </div>
        </div>
    );
};

export default renderContent;
