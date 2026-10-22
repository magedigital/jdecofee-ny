import DefaultI from '@/src/components/default/types';

type PropsT = {};

type StateT = {
    products?: ProductT[];
};

export type ProductT = {
    code: string;
    description: string;
    image: string;
    name: string;
};

interface ProductsI extends DefaultI<PropsT, StateT> {}

export default ProductsI;
