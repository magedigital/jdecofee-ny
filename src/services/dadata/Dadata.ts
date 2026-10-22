import get from './methods/get';

import DadataI from './types';

export default class Dadata implements DadataI {
    token = window.daDataToken || '00da3a703dc2022ab49c586fd66afc05c960ca9b';
    url = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address';

    get = get;
}
