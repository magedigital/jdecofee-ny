import DragFile from '@/src/services/dragFile/DragFile.ts';

import I from '../types.ts';

const init: I['init'] = async function (this: I) {
    const area = this.parent.current as HTMLElement;

    const overHandler = async () => await this.asyncSetState({ isOver: true });
    const leaveHandler = async () => await this.asyncSetState({ isOver: false });
    const dropHandler = async (files: FileList) => {
        await this.uploadHandler({ file: files[0] });
        await this.asyncSetState({ isOver: false });
    };

    new DragFile().init({ area, overHandler, leaveHandler, dropHandler });
};

export default init;
