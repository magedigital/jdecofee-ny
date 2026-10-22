import I from '../types.ts';

const setEndCurrent: I['setEndCurrent'] = function (inertValue = 0) {
    const end: { offset: number; current: number | null; inertValue: number } = {
        offset: Infinity,
        current: null,
        inertValue: 0,
    };

    this.area.querySelectorAll<HTMLElement>(`.${this.itemClass}`).forEach((item, key) => {
        const itemOffset = this.getOffsetItem(item);
        const id = +(item.getAttribute('data-id') as string);
        let calcItemOffset = itemOffset - this.direction! * (item.offsetWidth / 2.2);

        if (inertValue > 2) {
            calcItemOffset -= inertValue * this.inertStep * (this.direction as number);
        }

        if (
            Math.abs(calcItemOffset) < Math.abs(end.offset) &&
            (this.infinity || key <= (this.lastItemKey as number))
        ) {
            end.offset = calcItemOffset;
            end.current = id;
        }
    });

    end.inertValue = inertValue;

    this.moveToCurrentItem(end);
};

export default setEndCurrent;
