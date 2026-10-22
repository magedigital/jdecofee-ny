import I from '../types.ts';

const getColWidth: I['getColWidth'] = function (n) {
    const { cols } = this.props;
    const percent = cols[n].width / Object.keys(cols).reduce((p, c) => p + cols[c].width, 0);

    return +(percent * 100).toFixed(3);
};

export default getColWidth;
