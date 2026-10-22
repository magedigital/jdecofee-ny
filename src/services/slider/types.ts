type ItemT = { id: string; key: number; isCurrent: boolean };

export default interface SliderI {
    slider: HTMLElement;
    area: HTMLElement;
    moveArea: HTMLElement;
    reactMoveArea?: HTMLElement;
    itemClass: string;
    showEach?: boolean;
    current: number;
    duration: number;
    infinity?: boolean;
    buttons?: {
        prev?: HTMLElement;
        next?: HTMLElement;
    };
    pagination?: {
        parent: HTMLElement;
        itemClass: string;
    };
    callback?: (data: {
        type: string;
        current?: number;
        currentKey?: number;
        items?: ItemT[];
        reactSetCb?: () => void;
    }) => void;
    withDrag?: boolean;
    notDragItems?: string[];
    calcHeight?: {
        node: HTMLElement;
        callback?: () => void;
    };

    currentKey: number;
    startPos: number;
    movePos: number;
    endPos: number;
    checkPos: number;
    isScroll?: boolean;
    isMove: boolean;
    allItemId: number;
    startItems: HTMLElement[];
    itemsCount: number;
    moveAreaWidth: number;
    itemsGroups: number[][];
    lastItemKey: number | null;
    leftMaxOffset: number;
    rightMaxOffset: number;
    animateId: number | undefined;
    buttonProcess: boolean;
    paginationInit: boolean;
    resizeTimerId: ReturnType<typeof setTimeout> | undefined;
    moveTime: number | null;
    moveTimeStart: number | null;
    moveTimerId: ReturnType<typeof setTimeout> | undefined;
    endTime: number | null;
    direction: number | undefined;
    maxItemWidth: number;
    inertMax: number;
    inertStep: number;

    getItem(this: SliderI, value: string | number, prop?: string): HTMLElement | null;
    setStartInfo(this: SliderI): void;
    setCurrent(this: SliderI): void;
    buttonHandler(this: SliderI, data: { dir: 'prev' | 'next' }): void;
    currentItemsHandler(this: SliderI, offset?: number): void;
    paginationHandler(this: SliderI): void;
    setPagination(this: SliderI): void;
    resizeHandler(this: SliderI): void;
    resize(this: SliderI): void;
    getNeedItems(
        this: SliderI,
        data: { dir: 'prev' | 'next' },
    ): { item: HTMLElement; key: number }[];
    setInfinity(this: SliderI): void;
    getReactItems(this: SliderI): ItemT[];

    start(this: SliderI, e: MouseEvent | TouchEvent): void;
    setMove(this: SliderI, value: number, force?: boolean): void;
    move(this: SliderI, e: MouseEvent | TouchEvent): void;
    end(this: SliderI, e: MouseEvent | TouchEvent): void;
    getOffsetItem(this: SliderI, item: HTMLElement): number;

    setCalcSize(this: SliderI): void;

    setEndCurrent(this: SliderI, inertValue?: number): void;

    setAnimate(
        this: SliderI,
        data: {
            timing?: 'easeInOut' | 'easeOut';
            duration: number;
            draw: (data: number) => void;
            callback: () => void;
            getId: (data: number) => void;
        },
    ): void;
    moveToCurrentItem(
        this: SliderI,
        data: {
            current: number | null;
            inertValue?: number;
            force?: boolean;
            callback?: () => void;
        },
    ): void;
    keyboardHandler(this: SliderI, e: KeyboardEvent): void;

    destroyNodes(this: SliderI): void;
    destroy(this: SliderI, force?: boolean): void;

    init(this: SliderI): void;
}

export type { ItemT as SliderItemT };
