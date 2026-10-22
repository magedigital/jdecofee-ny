import React from 'react';

import Button from '@/src/components/button/Button.tsx';
import Default from '@/src/components/default/Default.tsx';

import getWinners from './methods/getWinners.ts';
import init from './methods/init.ts';
import setPhone from './methods/setPhone.ts';
import setWeek from './methods/setWeek.ts';

import HeaderI from './types.ts';

import renderBar from './renders/renderBar.tsx';
import renderHead from './renders/renderHead.tsx';
import renderTable from './renders/renderTable.tsx';
import renderTableCol from './renders/renderTableCol.tsx';
import renderTableEmpty from './renders/renderTableEmpty.tsx';

class Header extends Default<HeaderI['props'], HeaderI['state']> implements HeaderI {
    parent: HeaderI['parent'];

    constructor(props: HeaderI['props']) {
        super(props);
        this.state = {
            page: 1,
        };

        this.parent = React.createRef();
    }

    init = init;

    setWeek = setWeek;
    setPhone = setPhone;

    getWinners = getWinners;

    renderTableCol = renderTableCol;
    renderTableEmpty = renderTableEmpty;

    renderHead = renderHead;
    renderBar = renderBar;
    renderTable = renderTable;

    render() {
        const { hasMore, isLoading } = this.state;

        return (
            <div ref={this.parent} className="winners _SECTION">
                {this.renderHead()}
                <div className="winners__content">
                    {this.renderBar()}
                    {this.renderTable()}
                </div>
                {hasMore && (
                    <div className="winners__tableButton">
                        <Button
                            loading={!!isLoading}
                            className="_whiteEmptyColor"
                            onClick={async () => {
                                await this.asyncSetState({ page: this.state.page + 1 });
                                await this.getWinners();
                            }}
                        >
                            показать ещё
                        </Button>
                    </div>
                )}
            </div>
        );
    }
}

export default Header;
