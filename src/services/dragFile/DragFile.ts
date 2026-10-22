import init from './methods/init';

import DragFileI from './types';

export default class DragFile implements DragFileI {
    count = 0;

    init = init;
}
