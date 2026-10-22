import I from '../types';

const clear: I['clear'] = function (s) {
    if (typeof s !== 'string' && typeof s !== 'number') {
        return undefined as any;
    }

    const phone = s
        .toString()
        .replace(/\D/g, '')
        .split('')
        .reverse()
        .filter((t, i) => i < 10)
        .reverse()
        .join('');

    return phone;
};

export default clear;
