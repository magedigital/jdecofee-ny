import React from 'react';

import List from '@/src/components/list/List.tsx';

import I from '../types.ts';

import LoaderBlock from '../../loaderBlock/LoaderBlock.tsx';

const renderContent: I['renderContent'] = function () {
    const { rows, emptyId, renderEmpty, renderListCb, loading } = this.props;

    return (
        <div className={this.getClass('table__content', loading && '_loading')}>
            <LoaderBlock className="table__loader" isShow={!!loading} />
            {renderEmpty && (
                <List
                    renderKey={!rows.length ? emptyId : undefined}
                    items={emptyId && !rows.length ? [{ _id: emptyId }] : []}
                    parentClass="table__empty"
                    itemClass="table__emptyItem"
                    itemStyleProps={[]}
                    parentStyleProps={[]}
                    parentRealStyleProps={[]}
                    render={({ item }) => ({
                        item: <div>{renderEmpty({ id: item._id })}</div>,
                    })}
                    startShowSmooth={true}
                />
            )}
            <List
                renderKey={rows.map((r) => r.id).join('')}
                items={rows.map((r) => ({ _id: r.id, ...r }))}
                parentClass="table__contentRows"
                itemClass="table__contentRowsItem"
                itemStyleProps={['top']}
                parentStyleProps={['width']}
                parentRealStyleProps={['width']}
                render={(d) => ({
                    item: this.renderRow({ ...d }),
                    className: d.index % 2 === 1 ? '_odd' : '',
                })}
                minHeight={rows.length ? undefined : 200}
                resizeWidth={true}
                callback={renderListCb}
            />
        </div>
    );
};

export default renderContent;
