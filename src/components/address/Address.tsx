import React from 'react';

import Button from '@/src/components/button/Button.tsx';
import Default from '@/src/components/default/Default.tsx';
import Input from '@/src/components/input/Input.tsx';

import addressHandler from './methods/addressHandler.ts';
import init from './methods/init.ts';

import AddressI from './types.ts';

class Address extends Default<AddressI['props'], AddressI['state']> implements AddressI {
    parent: AddressI['parent'];

    constructor(props: AddressI['props']) {
        super(props);
        this.state = {
            currentBlock: this.props.pointId || !this.props.pointAddress ? 'point' : 'manual',
            list: [],
        };

        this.parent = React.createRef();
    }

    init = init;

    addressHandler = addressHandler;

    render() {
        const { currentBlock, list, search } = this.state;
        const { pointAddress, onChange, setPoint, pointId } = this.props;

        return (
            <div ref={this.parent} className="addressPoint _FULL_W">
                <div
                    className={`addressPoint__block _FULL_W _COL ${currentBlock === 'point' ? '_active' : ''}`}
                >
                    <p
                        className="addressPoint__title _CLICK"
                        onClick={() => {
                            if (currentBlock !== 'point' && setPoint) {
                                setPoint('0', undefined);
                            }

                            this.setState({ currentBlock: 'point' });
                        }}
                    >
                        <i className="addressPoint__point" />
                        Доставить в пункт выдачи:
                    </p>
                    <div className="addressPoint__left _COL">
                        {pointId && (
                            <p className="addressPoint__address">
                                {pointId ? <>{pointAddress || '–'}</> : <></>}
                            </p>
                        )}

                        <div className="addressPoint__button">
                            <Button className="_lightPurpleColor _mediumSize">Выбрать пункт</Button>
                        </div>
                    </div>
                </div>
                <div
                    className={`addressPoint__block _FULL_W _COL ${currentBlock === 'manual' ? '_active' : ''}`}
                >
                    <p
                        className="addressPoint__title _CLICK"
                        onClick={() => {
                            this.setState({ currentBlock: 'manual' });

                            if (setPoint) {
                                setPoint(undefined, undefined);
                            }
                        }}
                    >
                        <i className="addressPoint__point" />
                        Доставить почтой на адрес:
                    </p>
                    <div className="addressPoint__field _FULL_W">
                        <Input
                            className="_formField"
                            value={search || ''}
                            onChange={async (data) => {
                                await onChange({ value: data.value });
                                await this.addressHandler({ value: data.value });
                            }}
                            disabled={currentBlock !== 'manual'}
                        />
                        {list.length > 0 && (
                            <div className="addressPoint__list _FULL_W">
                                {list.map((item, key) => (
                                    <div
                                        className="addressPoint__listItem _CLICK"
                                        key={key}
                                        dangerouslySetInnerHTML={{ __html: item }}
                                        onClick={async () => {
                                            await this.addressHandler({
                                                value: item,
                                                choice: true,
                                            });
                                        }}
                                    ></div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Address;
