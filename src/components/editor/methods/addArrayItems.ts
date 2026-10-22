import I from '../types.ts';

const addArrayItems: I['addArrayItems'] = async function ({
    key,
    targetName,
    target: propsTarget,
    items,
}) {
    const target = (propsTarget || this.state[targetName]) as ObjT;

    if (!target || typeof target !== 'object' || Array.isArray(target)) {
        return;
    }

    const savedTargetName = this.getSavedTargetName(targetName);
    const resultTarget = structuredClone(target) as ObjT;

    const { target: arrTarget, key: arrKey } = this.getValue({
        key,
        targetName,
        target: resultTarget,
        arrById: true,
    });

    if (!arrTarget || !arrKey || !Array.isArray(arrTarget[arrKey])) {
        return;
    }

    const { target: savedArrTarget, key: savedArrKey } = this.getValue({
        key,
        targetName: savedTargetName,
        arrById: true,
    });

    const newItems = items.map((item) => ({
        ...item,
        _id: new Date().getTime().toString(),
        isNew: true,
    }));

    arrTarget[arrKey].push(...newItems);

    if (savedArrTarget && savedArrKey && Array.isArray(savedArrTarget[savedArrKey])) {
        savedArrTarget[savedArrKey].push(
            ...newItems.map((item) => ({ ...item, isNew: undefined })),
        );

        newItems.forEach((newItem) => {
            this.changes[`${key}.${newItem._id}.isNew`] = true;
        });
    }

    await this.asyncSetState({
        [targetName]: resultTarget,
        isEdited: Object.keys(this.changes).length > 0,
    });
};

export default addArrayItems;
