import I from '../types.ts';

const deleteFile: I['deleteFile'] = async function (id) {
    const { updateListRender } = this.props;
    const files = [...this.state.files];
    const index = files.findIndex((item) => item.id === id);

    if (index !== -1) {
        files.splice(index, 1);
    }

    delete this.files[id];

    // await setAsyncTimer(10);

    await this.asyncSetState({ files });

    await updateListRender();
};

export default deleteFile;
