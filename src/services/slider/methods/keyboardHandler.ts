import I from '../types.ts';

const keyboardHandler: I['keyboardHandler'] = function (e) {
    if ([37, 39].includes(e.which) && 0) {
        e.preventDefault();

        this.buttonHandler({ dir: e.which === 37 ? 'prev' : 'next' });
    }
};

export default keyboardHandler;
