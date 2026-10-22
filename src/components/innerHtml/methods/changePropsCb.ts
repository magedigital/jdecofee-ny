import I from '../types.ts';

const changePropsCb: I['changePropsCb'] = async function (this: I, p) {
    const { disabled } = this.props;

    if (p === 'disabled' && 0) {
        this.parent.current!.querySelectorAll('a').forEach((i) => {
            i.setAttribute('data-check', 'true');

            if (disabled) {
                i.setAttribute('data-href', i.getAttribute('href')!);
                i.removeAttribute('href');
            } else {
                i.setAttribute('href', i.getAttribute('data-href')!);
                i.removeAttribute('data-href');
            }
        });
    }
};

export default changePropsCb;
