import I from '../types.ts';

const changePageListener: I['changePageListener'] = function ({ detail: { isPopstate } }) {
    this.popupsHandler(isPopstate);
};

export default changePageListener;
