type TimingT = (data: number) => number;

const makeEaseInOut: TimingT = (timeFraction) =>
    timeFraction > 0.5 ? 4 * Math.pow(timeFraction - 1, 3) + 1 : 4 * Math.pow(timeFraction, 3);
const makeEaseOut: TimingT = (t) => (t <= 0.5 ? t : Math.pow(t - 1, 3) + 1);

export { makeEaseOut };

export default function setAnimate({
    progress: startProgress = 0,
    timing = makeEaseInOut,
    duration,
    draw,
    callback,
    getId,
}: {
    progress?: number;
    timing?: TimingT;
    duration?: number;
    draw: (progress: number) => void;
    callback?: () => void;
    getId?: (data: number) => void;
}): void {
    if (!duration) {
        duration = 1_000;
    }

    const start = performance.now();

    let idAnimate;

    requestAnimationFrame(function animate(time) {
        let timeFraction = (time - start) / duration + startProgress;

        if (timeFraction > 1) {
            timeFraction = 1;
        }

        let progress = timing(timeFraction);

        if (progress < 0) {
            progress = 0;
        }

        draw(progress);

        if (timeFraction < 1) {
            idAnimate = requestAnimationFrame(animate);

            if (getId) {
                getId(idAnimate);
            }
        }

        if (timeFraction === 1 && callback) {
            callback();
        }
    });
}
