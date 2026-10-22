import React from 'react';

import Address from '@/src/components/address/Address.tsx';
import Checkbox from '@/src/components/checkbox/Checkbox.tsx';
import Input from '@/src/components/input/Input.tsx';
import List from '@/src/components/list/List.tsx';
import LoaderBlock from '@/src/components/loaderBlock/LoaderBlock.tsx';
import Select from '@/src/components/select/Select.tsx';
import Upload from '@/src/components/upload/Upload.tsx';

import I from '../types.ts';

const renderField: I['renderField'] = function () {
    const { addressesList = [], loadingKey } = this.state;
    const {
        type,
        name,
        value,
        setValue,
        uploadFile,
        input,
        select,
        checkbox,
        className,
        disabled,
        data,
    } = this.props;

    if (type === 'input') {
        return (
            <>
                <Input
                    className={this.getClass('_formField', className)}
                    value={value}
                    onChange={async (p) => {
                        await setValue({ name, value: p.value });

                        if (input?.isAddress) {
                            if (!loadingKey) {
                                await this.asyncSetState({ loadingKey: 'address' });
                            }

                            this.getAddressesInc();
                        }
                    }}
                    regExp={input?.regExp}
                    regName={input?.reg}
                    support={input?.support}
                    isArea={input?.isArea}
                    isPassword={input?.isPassword}
                    disabled={disabled}
                />
                {input?.isAddress && (
                    <>
                        <LoaderBlock isShow={loadingKey === 'address'} className="field__loader" />
                        <List
                            renderKey={addressesList.join('')}
                            items={addressesList.map((i) => ({
                                _id: encodeURIComponent(i),
                                text: i,
                            }))}
                            parentClass="field__list"
                            itemClass="field__listItem"
                            itemStyleProps={['top']}
                            parentStyleProps={['width']}
                            parentRealStyleProps={['width']}
                            wrapperClassName="field__listInner"
                            renderWrapper={(n) => <div className="field__listInner">{n}</div>}
                            render={({ item }) => ({
                                item: (
                                    <div
                                        className="field__listItemInner"
                                        dangerouslySetInnerHTML={{ __html: item.text }}
                                        onClick={async () => {
                                            const d = document.createElement('div');
                                            d.innerHTML = item.text;

                                            await setValue({ name, value: d.innerText });
                                            await this.asyncSetState({ addressesList: undefined });
                                        }}
                                    ></div>
                                ),
                            })}
                        />
                    </>
                )}
            </>
        );
    }

    if (type === 'select') {
        return (
            <Select
                className={this.getClass('_formField', className)}
                value={value}
                list={select?.list || []}
                onChange={async (p) => {
                    await setValue({ name, value: p.value });
                }}
                disabled={disabled}
            />
        );
    }

    if (type === 'checkbox') {
        return (
            <Checkbox
                className={this.getClass('_formField', className)}
                value={!!value}
                onChange={async (p) => {
                    await setValue({ name, value: p.value });
                }}
                disabled={disabled}
            >
                {checkbox?.content}
            </Checkbox>
        );
    }

    if (type === 'file') {
        return (
            <Upload
                fileName={value}
                onChange={async (d) => {
                    if (uploadFile) {
                        await uploadFile({ file: d.file, name });
                        await setValue({ name, value: d.file.name });
                    }
                }}
                disabled={disabled}
            />
        );
    }

    if (type === 'address') {
        return (
            <Address
                onChange={async (p) => {
                    await setValue({ name, value: p.value });
                    await setValue({ name: 'pointId', value: undefined });
                }}
                pointId={data?.pointId as string}
                pointAddress={data?.pointAddress as string}
                pageData={data}
            />
        );
    }
};

export default renderField;
