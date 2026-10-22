import React from 'react';

import Fade from '@/src/components/fade/Fade.tsx';
import Icon from '@/src/components/icon/Icon.tsx';

import I from '../types.ts';

const renderResult: I['renderResult'] = function () {
    const { fileName, disabled } = this.props;

    return (
        <Fade className="upload__result _FULL _COL _COL_CENTER" isShow={!!fileName}>
            <p className="upload__resultName">{fileName}</p>
            <label className="upload__resultButton _CLICK">
                <input
                    type="file"
                    onChange={async (e) => {
                        await this.uploadHandler({ file: e.target.files![0] });
                        e.target.value = '';
                    }}
                    accept=".jpg,.jpeg,.png"
                    disabled={disabled}
                />
                <i className="upload__resultButtonIcon">
                    <Icon name="upload" />
                </i>
                Загрузить другое фото
            </label>
        </Fade>
    );
};

export default renderResult;
