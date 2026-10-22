import { promo } from '@/src/index.tsx';

import I, { ProductT } from '../types.ts';

const init: I['init'] = async function (this: I) {
    try {
        const r = await promo.resources.getResources(['products']);
        const products = r.products.value as ProductT[];
        const images = products.map((p) => p.image);
        const imagesResponse = await promo.resources.getResources(images);

        products.forEach((p) => {
            p.image = imagesResponse[p.image]?.value as string;
        });

        await this.asyncSetState({ products });
    } catch (e) {}
};

export default init;
