import I from '../types.ts';

import { inputRegs } from '../static/regs.ts';

const getReg: I['getReg'] = function () {
    const { regName } = this.props;
    const reg = { ...inputRegs[regName!] };

    if (regName === 'any') {
        reg.template = this.props.reg!;
    }

    return reg;
};

export default getReg;
