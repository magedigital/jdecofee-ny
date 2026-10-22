import { appStore } from '@/src/store/store';

export const setPxFromRem = (r: number): number => {
    const device = appStore.getState().device;
    const m = device === 'desktop' ? 1512 : 414;

    return Math.round((document.documentElement.clientWidth / m) * r);
};
