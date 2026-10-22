import I from '../types.ts';

const inputHandler: I['inputHandler'] = async function (index, { value }) {
    const { callback } = this.props;
    const inputs = [...this.state.inputs];
    const clearedValue = value.replace(/\D/gi, '');
    let resultIndex = index;

    if (value === '') {
        inputs[index] = '';
    } else {
        clearedValue.split('').forEach((char, charIndex) => {
            const thisIndex = charIndex + index;

            if (thisIndex < inputs.length) {
                inputs[thisIndex] = char;

                resultIndex = thisIndex;
            }
        });
    }

    const nextInputNode = this.parent.current!.querySelector(
        `.codeInputs__item[data-key="${resultIndex + (value ? 1 : -1)}"] input`,
    ) as HTMLElement;

    if (nextInputNode) {
        nextInputNode.focus();
    }

    await this.asyncSetState({ inputs });

    if (inputs.every((i) => i)) {
        callback(inputs.join(''));

        // await this.init();
    }
};

export default inputHandler;
