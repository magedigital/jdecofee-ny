import React from 'react';

import DashedBorder from '@/src/components/dashedBorder/DashedBorder.tsx';
import Icon from '@/src/components/icon/Icon.tsx';

import I from '../types.ts';

const renderUploadField: I['renderUploadField'] = function () {
    const { files } = this.state;
    const { mode } = this.props;

    if (mode !== 'typing') {
        return;
    }

    return (
        <label className="popup__upload _FULL_W _COL _COL_CENTER _CLICK">
            <div className="popup__uploadBorder">
                <DashedBorder />
            </div>
            <input
                type="file"
                multiple
                accept=".jpg,.jpeg,.png"
                onChange={this.uploadFile.bind(this)}
            />
            <div className="popup__uploadFiles _ROW">
                {files.map((file) => (
                    <div className="popup__uploadFile" key={file.id}>
                        <img src={file.src} alt="" className="popup__uploadFilePreview" />
                        <div
                            className="popup__uploadFileDelete _CLICK _COL _COL_CENTER"
                            onClick={(e) => {
                                e.stopPropagation();
                                e.preventDefault();

                                this.deleteFile(file.id);
                            }}
                        >
                            <i className="popup__uploadFileDeleteIcon">
                                <Icon name="cookies-close" />
                            </i>
                        </div>
                    </div>
                ))}
            </div>
            <p className="popup__uploadText">
                Приложи одно или несколько фото чека с&nbsp;фискальными данными
            </p>
        </label>
    );
};

export default renderUploadField;
