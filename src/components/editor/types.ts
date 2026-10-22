import DefaultI from '@/src/components/default/types';

type PropsT = {};

type StateT = {
    isEdited?: boolean;
    listItems?: ItemT[];
    listLimit?: boolean;
    listCount?: number;
    listRenderKey?: string;
    listUpdateKey?: string;
    isListLoading?: boolean;
    error?: Partial<{
        name: string;
        text: string;
    }>;
};

type ItemT = { _id: string } & ObjT;

interface EditorI<P = ObjT, S = ObjT> extends DefaultI<PropsT & P, StateT & S> {
    changes: Record<string, unknown>;
    deletes: Record<string, Set<string>>;
    listStep: number;
    listCurrentStep: number;
    listDir: 'vertical' | 'horizontal';
    listProcess?: boolean;
    listScrollTargetNode?: HTMLElement;
    listRenderKeys: string[];
    listUpdateKeys: string[];

    setValue(
        this: EditorI,
        data: { data: ObjT; targetName: string; arrById?: boolean },
    ): Promise<void>;
    getValue<T = unknown>(
        this: EditorI,
        data: { key: string; targetName: string; target?: ObjT; arrById?: boolean },
    ): { target?: ObjT; key?: string; value?: T };
    getSavedTargetName(this: EditorI, name: string): string;
    getChangedTarget(this: EditorI, data: { targetName: string }): ObjT | undefined;
    addArrayItems(
        this: EditorI,
        data: { key: string; targetName: string; target?: ObjT; items: ObjT[] },
    ): Promise<void>;
    deleteArrayItems(
        this: EditorI,
        data: { key: string; targetName: string; target?: ObjT; items: string[] },
    ): Promise<void>;
    initTarget(this: EditorI, data: { data: ObjT; targetName: string }): Promise<void>;

    initScrollList(this: EditorI, target: HTMLElement | string | undefined): Promise<void>;
    listScrollHandler(this: EditorI, e: Event): Promise<void>;
    getListQuery(this: EditorI): FilterQueryT[];
    getListItemsMore(this: EditorI): Promise<void>;
    getListItems?(
        this: EditorI,
        data: { query: FilterQueryT[] },
    ): Promise<{ items: ItemT[]; count: number; isLimit?: boolean }>;
    setListItems(
        this: EditorI,
        data: { items: ItemT[]; count: number; isLimit?: boolean; concat?: boolean },
    ): Promise<void>;
    afterSetListItems?(this: EditorI): Promise<void>;

    setListItemsKeys(this: EditorI, items?: ItemT[]): Promise<void>;
    modifySetListItems?(this: EditorI, items: ItemT[]): ItemT[];
    addListItems(this: EditorI, data: { items: ItemT[] }): Promise<void>;
    deleteListItems(this: EditorI, data: { items: string[] }): Promise<void>;
    updateListItems(
        this: EditorI,
        data: { items: ItemT[]; isFull?: boolean; isAdd?: boolean },
    ): Promise<void>;

    visibillityChangeHandler?(this: EditorI): Promise<void>;
}

export default EditorI;
