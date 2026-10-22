import React from 'react';

import Default from '@/src/components/default/Default.tsx';
import LoaderBlock from '@/src/components/loaderBlock/LoaderBlock.tsx';
import { StoreT, WithStore } from '@/src/store/store.tsx';

import changePropsCb from './methods/changePropsCb.ts';
import checkClear from './methods/checkClear.ts';
import init from './methods/init.ts';
import inputHandler from './methods/inputHandler.ts';

import CodeInputsI from './types.ts';

class CodeInputs
    extends Default<CodeInputsI['props'], CodeInputsI['state']>
    implements CodeInputsI
{
    parent: CodeInputsI['parent'];

    constructor(props: CodeInputsI['props']) {
        super(props);
        this.state = {
            inputs: [],
        };

        this.parent = React.createRef();
    }

    changingProps = ['clearKey'];

    init = init;
    changePropsCb = changePropsCb;

    inputHandler = inputHandler;

    checkClear = checkClear;

    render() {
        const { inputs } = this.state;
        const { loading, device } = this.props;

        return (
            <div ref={this.parent} className="codeInputs _ROW">
                {inputs.map((input, key) => (
                    <div className="codeInputs__item" key={key} data-key={key}>
                        <input
                            className="codeInputs__itemInput"
                            type={device === 'desktop' ? 'text' : 'number'}
                            value={input}
                            onChange={({ target }) => {
                                this.inputHandler(key, { value: target.value });
                            }}
                            disabled={!!loading}
                        />
                    </div>
                ))}
                <LoaderBlock
                    className="codeInputs__loader"
                    isShow={!!loading}
                    loaderClassName="_main"
                />
            </div>
        );
    }
}

const mapStore = (s: StoreT) => ({
    device: s.device,
});

export default WithStore(CodeInputs, mapStore);
