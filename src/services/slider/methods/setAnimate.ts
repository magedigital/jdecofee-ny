import I from '../types.ts';

const timings = {
    easeInOut: (timeFraction: number): number =>
        timeFraction > 0.5 ? 4 * Math.pow(timeFraction - 1, 3) + 1 : 4 * Math.pow(timeFraction, 3),
    easeOut: (timeFraction: number): number => 1 - Math.pow(1 - timeFraction, 3),
};

const setAnimate: I['setAnimate'] = function ({
    timing = 'easeInOut',
    duration,
    draw,
    callback,
    getId,
}) {
    const start = performance.now();
    let animateId;

    requestAnimationFrame(function animate(time) {
        let timeFraction = (time - start) / duration;

        if (timeFraction > 1) {
            timeFraction = 1;
        }

        const progress = timings[timing](timeFraction);

        draw(progress);

        if (timeFraction < 1) {
            animateId = requestAnimationFrame(animate);

            if (typeof getId === 'function') {
                getId(animateId);
            }
        }

        if (timeFraction === 1) {
            if (callback) {
                callback();
            }
        }
    });
};

export default setAnimate;
