import React from 'react';

import I from '../types.ts';

const renderItem: I['renderItem'] = function ({ item }) {
    const id = item._id;
    const { items: stateItems } = this.state;
    const { items, itemClass = '', render, getItemClass } = this.props;

    const index = this.indexes[id];
    const isFirst = index === 0;
    const isLast = index === items.length - 1;
    const isShow = this.states[id] === 1;
    const isHide = this.states[id] === 0;

    const prevItem = index > 0 ? items[index - 1] : undefined;
    const nextItem = index < items.length - 1 ? items[index + 1] : undefined;
    const renderProps = {
        item,
        prevItem,
        nextItem,
        isHide,
        isShow,
        isFirst,
        isLast,
        index,
        items: stateItems,
    };
    const renderInfo = render({ ...renderProps });
    const style = renderInfo.style;
    const propsClass = renderInfo.className;
    const classes = [
        itemClass,
        this.id,
        ...(isFirst ? ['_first'] : []),
        ...(isLast ? ['_last'] : []),
        ...(isShow ? ['_show'] : []),
        ...(propsClass ? [propsClass] : []),
        ...(getItemClass ? [getItemClass({ item })] : []),
    ];

    return (
        <div
            className={this.getClass('list__item', ...classes)}
            data-id={id}
            key={id}
            style={style}
        >
            {renderInfo.item}
        </div>
    );
};

export default renderItem;
