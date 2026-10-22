import I from '../types.ts';

const promoHandler: I['promoHandler'] = async function (
    this: I,
    isPromoShow = !this.state.isPromoShow,
) {
    if (this.timers.promo) {
        clearTimeout(this.timers.promo);
    }

    await this.asyncSetState({ isPromoShow });

    this.timers.promo = setTimeout(async () => {
        await this.asyncSetState({ isPromoForceShow: isPromoShow });
    }, 150);
};

export default promoHandler;
