import { appStore } from '@/src/store/store';

export const setClipSize = (n: HTMLElement): void => {
    const device = appStore.getState().device;
    let startScale = n.getAttribute(device === 'desktop' ? 'data-scale' : 'data-mobscale');

    if (!startScale) {
        startScale = n.getAttribute('data-scale');
    }

    if (!startScale) {
        return;
    }

    const scale = (window.widthValue / (device === 'desktop' ? 1512 : 414)) * +startScale;

    n.style.transform = `scale(${scale})`;
};
