import React from 'react';

import Default from '@/src/components/default/Default.tsx';

import addArrayItems from './methods/addArrayItems.ts';
import addListItems from './methods/addListItems.ts';
import deleteArrayItems from './methods/deleteArrayItems.ts';
import deleteListItems from './methods/deleteListItems.ts';
import getChangedTarget from './methods/getChangedTarget.ts';
import getListItemsMore from './methods/getListItemsMore.ts';
import getListQuery from './methods/getListQuery.ts';
import getSavedTargetName from './methods/getSavedTargetName.ts';
import getValue from './methods/getValue.ts';
import initScrollList from './methods/initScrollList.ts';
import initTarget from './methods/initTarget.ts';
import listScrollHandler from './methods/listScrollHandler.ts';
import setListItems from './methods/setListItems.ts';
import setListItemsKeys from './methods/setListItemsKeys.ts';
import setValue from './methods/setValue.ts';
import updateListItems from './methods/updateListItems.ts';

import EditorI from './types.ts';

class Editor<P = ObjT, S = ObjT>
    extends Default<EditorI<P, S>['props'], EditorI<P, S>['state']>
    implements EditorI<P, S>
{
    parent: EditorI['parent'];
    visibillityChangeHandler: EditorI['visibillityChangeHandler'];

    constructor(props: EditorI<P, S>['props']) {
        super(props);
        this.state = {} as EditorI<P, S>['state'];

        this.listScrollHandler = this.listScrollHandler.bind(this);

        if (this.visibillityChangeHandler) {
            this.visibillityChangeHandler = this.visibillityChangeHandler.bind(this);
        }

        this.parent = React.createRef();
    }

    changes = {};
    deletes = {};

    listCurrentStep = 0;
    listStep = 50;
    listDir = 'vertical' as const;
    listRenderKeys = [];
    listUpdateKeys = [];

    getValue = getValue;
    setValue = setValue;
    getSavedTargetName = getSavedTargetName;
    getChangedTarget = getChangedTarget;
    addArrayItems = addArrayItems;
    deleteArrayItems = deleteArrayItems;
    initTarget = initTarget;

    initScrollList = initScrollList;
    listScrollHandler = listScrollHandler;
    getListItemsMore = getListItemsMore;
    setListItems = setListItems;
    getListQuery = getListQuery;

    setListItemsKeys = setListItemsKeys;
    addListItems = addListItems;
    deleteListItems = deleteListItems;
    updateListItems = updateListItems;

    componentDidMount(): void {
        super.componentDidMount();

        if (this.visibillityChangeHandler) {
            document.addEventListener('visibilitychange', this.visibillityChangeHandler);

            this.unmountHandlers.editor = () =>
                document.removeEventListener('visibilitychange', this.visibillityChangeHandler!);
        }
    }
}

export default Editor;
