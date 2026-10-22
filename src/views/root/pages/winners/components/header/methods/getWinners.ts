import { promo } from '@/src/index.tsx';

import I from '../types.ts';

const getWinners: I['getWinners'] = async function (force) {
    const { page, searchWeek, searchPhone } = this.state;

    try {
        await this.asyncSetState({ isLoading: true });
        const raffles = await promo.raffles.getList();
        const winners = await promo.raffles.getWinners({
            raffle_id: searchWeek,
            search: searchPhone,
            page,
            limit: 25,
        });

        await this.asyncSetState({
            raffles: raffles.items,
            winners: force ? winners.items : [...(this.state.winners || []), ...winners.items],
            hasMore: winners.pagination.total_pages > page,
        });
    } catch (e) {}
    await this.asyncSetState({ isLoading: false });
};

export default getWinners;
