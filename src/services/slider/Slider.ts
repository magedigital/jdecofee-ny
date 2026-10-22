import buttonHandler from './methods/buttonHandler';
import currentItemsHandler from './methods/currentItemsHandler';
import destroy from './methods/destroy';
import destroyNodes from './methods/destroyNodes';
import end from './methods/end';
import getItem from './methods/getItem';
import getNeedItems from './methods/getNeedItems';
import getOffsetItem from './methods/getOffsetItem';
import getReactItems from './methods/getReactItems';
import init from './methods/init';
import keyboardHandler from './methods/keyboardHandler';
import move from './methods/move';
import moveToCurrentItem from './methods/moveToCurrentItem';
import paginationHandler from './methods/paginationHandler';
import resize from './methods/resize';
import resizeHandler from './methods/resizeHandler';
import setAnimate from './methods/setAnimate';
import setCalcSize from './methods/setCalcSize';
import setCurrent from './methods/setCurrent';
import setEndCurrent from './methods/setEndCurrent';
import setInfinity from './methods/setInfinity';
import setMove from './methods/setMove';
import setPagination from './methods/setPagination';
import setStartInfo from './methods/setStartInfo';
import start from './methods/start';

import SliderI from './types';

export default class Slider implements SliderI {
    slider: SliderI['slider'];
    area: SliderI['area'];
    reactMoveArea: SliderI['reactMoveArea'];

    moveArea: SliderI['moveArea'];
    itemClass: SliderI['itemClass'];
    showEach: SliderI['showEach'];
    infinity: SliderI['infinity'];
    buttons: SliderI['buttons'];
    pagination: SliderI['pagination'];
    duration: SliderI['duration'];
    currentKey: number;
    callback: SliderI['callback'] | undefined;
    animateId: number | undefined;
    resizeTimerId: ReturnType<typeof setTimeout> | undefined;
    moveTimerId: ReturnType<typeof setTimeout> | undefined;
    direction: number | undefined;
    withDrag?: boolean;
    notDragItems?: SliderI['notDragItems'];
    calcHeight?: SliderI['calcHeight'];

    constructor(
        props: Pick<
            SliderI,
            | 'slider'
            | 'area'
            | 'moveArea'
            | 'itemClass'
            | 'infinity'
            | 'buttons'
            | 'withDrag'
            | 'calcHeight'
        > &
            Partial<
                Pick<
                    SliderI,
                    | 'showEach'
                    | 'pagination'
                    | 'callback'
                    | 'current'
                    | 'reactMoveArea'
                    | 'notDragItems'
                    | 'duration'
                >
            >,
    ) {
        const {
            slider,
            area,
            moveArea,
            itemClass,
            showEach = false,
            infinity = false,
            buttons,
            pagination,
            current,
            callback,
            withDrag,
            notDragItems,
            reactMoveArea,
            calcHeight,
            duration,
        } = props;

        this.slider = slider;
        this.area = area;
        this.reactMoveArea = reactMoveArea;
        this.moveArea = moveArea;
        this.itemClass = itemClass;
        this.showEach = !!showEach;
        this.infinity = !!infinity;
        this.buttons = buttons;
        this.pagination = pagination;
        this.currentKey = current || 0;
        this.withDrag = withDrag;
        this.notDragItems = notDragItems;
        this.calcHeight = calcHeight;
        this.duration = duration ?? 250;

        if (typeof callback === 'function') {
            this.callback = callback;
        }

        this.start = this.start.bind(this);
        this.move = this.move.bind(this);
        this.end = this.end.bind(this);
        this.resize = this.resize.bind(this);
        this.keyboardHandler = this.keyboardHandler.bind(this);

        this.init();
    }

    maxItemWidth = 0;
    inertMax = 12;
    inertStep = 200;
    startPos = 0;
    movePos = 0;
    endPos = 0;
    checkPos = 0;
    isMove = false;
    allItemId = 0;
    startItems = [];
    itemsCount = 0;
    moveAreaWidth = 0;
    current = 0;
    itemsGroups = [];
    lastItemKey = null;
    leftMaxOffset = 0;
    rightMaxOffset = 0;
    buttonProcess = false;
    paginationInit = false;
    moveTime = null;
    moveTimeStart = null;
    endTime = null;

    getItem = getItem;
    setStartInfo = setStartInfo;
    setCurrent = setCurrent;
    buttonHandler = buttonHandler;
    currentItemsHandler = currentItemsHandler;

    paginationHandler = paginationHandler;
    setPagination = setPagination;

    resizeHandler = resizeHandler;
    resize = resize;

    getNeedItems = getNeedItems;
    setInfinity = setInfinity;
    getReactItems = getReactItems;

    start = start;
    setMove = setMove;
    move = move;
    end = end;

    getOffsetItem = getOffsetItem;
    setEndCurrent = setEndCurrent;
    setAnimate = setAnimate;
    moveToCurrentItem = moveToCurrentItem;
    keyboardHandler = keyboardHandler;

    setCalcSize = setCalcSize;

    destroyNodes = destroyNodes;
    destroy = destroy;

    init = init;
}
