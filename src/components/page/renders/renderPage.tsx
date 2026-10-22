import React from 'react';

import Fade from '@/src/components/fade/Fade.tsx';
import LoaderBlock from '@/src/components/loaderBlock/LoaderBlock.tsx';
import Media from '@/src/components/media/Media.tsx';
import Footer from '@/src/views/root/components/footer/Footer.tsx';

import Menu from '../../../views/root/components/menu/Menu.tsx';
import TopBar from '../../../views/root/components/topBar/TopBar.tsx';

import I from '../types.ts';

const renderPage: I['renderPage'] = function ({ render, renderOutside, renderTopInfo, className }) {
    const { isInit, isFixBarShow, isMenuShow, isPopupShow, isLightMode } = this.state;
    const TopInfo = renderTopInfo?.();

    return (
        <div
            ref={this.parent}
            className={this.getClass(
                'page',
                className,
                isInit === false && '_loading',
                isPopupShow && '_disabled',
                this.mode === 'inner' && '_inner',
                TopInfo && '_withTop',
            )}
        >
            {TopInfo}
            <div className={this.getClass('page__topBar _fix', isFixBarShow && '_show')}>
                <TopBar
                    mode={this.mode}
                    setMenuState={this.setMenuState.bind(this)}
                    pageCloseHandler={this.close.bind(this)}
                    className="_fix"
                />
            </div>
            <Media check={(d) => d === 'mobile'}>
                <Fade isShow={!!isMenuShow} className="page__menu">
                    <Menu setState={this.setMenuState.bind(this)} />
                </Fade>
            </Media>

            <div className="page__scroll" onScroll={this.checkScroll.bind(this)}>
                <div className={this.getClass('page__topBar')}>
                    <TopBar
                        mode={this.mode}
                        setMenuState={this.setMenuState.bind(this)}
                        pageCloseHandler={this.close.bind(this)}
                        className={this.getClass(isLightMode && '_light')}
                    />
                </div>
                <div className="page__scrollInner _COL">
                    {typeof isInit === 'boolean' && (
                        <LoaderBlock isShow={!isInit} className="page__loader" />
                    )}
                    <div className="page__scrollContent _COL">{render()}</div>
                    {renderOutside?.()}
                    {this.mode === 'inner' && (
                        <div className="page__footer _FULL_W">
                            <Footer mode="inner" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default renderPage;
