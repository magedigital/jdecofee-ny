import I from '../types.ts';

const setPhone: I['setPhone'] = async function (p) {
    const phone = p.replace(/\D/gi, '').slice(0, 4);
    let page: number | undefined;

    if (
        phone &&
        ((phone.length === 4 && this.state.searchPhone?.length !== 4) ||
            (phone.length !== 4 && this.state.searchPhone?.length === 4))
    ) {
        page = 1;
    }

    await this.asyncSetState({ searchPhone: phone });

    this.addThrottle('winners', 300, [''], async () => {
        await this.asyncSetState({ ...(page ? { page } : {}) });
        await this.getWinners(true);
    });
};

export default setPhone;
