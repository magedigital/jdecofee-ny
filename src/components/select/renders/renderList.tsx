import React from 'react';

import I from '../types.ts';

const renderList: I['renderList'] = function () {
    const { list, value, onChange } = this.props;

    return (
        <div className="select__list">
            {list.map((i) => (
                <div
                    className={this.getClass(
                        'select__listItem _CLICK',
                        i.id === value ? '_current' : '',
                    )}
                    key={i.id}
                    onClick={() => {
                        if (onChange) {
                            onChange({ value: i.id });
                        }

                        this.setActive(false);
                    }}
                >
                    {i.title}
                </div>
            ))}
        </div>
    );
};

export default renderList;
