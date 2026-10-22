import I from '../types.ts';

const init: I['init'] = function ({ area, overHandler, leaveHandler, dropHandler }) {
    function preventDefaults(e: Event) {
        e.preventDefault();
        e.stopPropagation();
    }

    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach((eventName) => {
        area.addEventListener(eventName, preventDefaults, false);
    });

    const isAdvancedUpload = (() => {
        const div = document.createElement('div');

        return (
            ('draggable' in div || ('ondragstart' in div && 'ondrop' in div)) &&
            'FormData' in window &&
            'FileReader' in window
        );
    })();

    if (!isAdvancedUpload) {
        return;
    }

    area.addEventListener(
        'dragenter',
        async () => {
            this.count++;

            await overHandler();
        },
        false,
    );
    area.addEventListener(
        'dragleave',
        async () => {
            this.count--;

            if (this.count === 0) {
                await leaveHandler();

                this.count = 0;
            }
        },
        false,
    );
    area.addEventListener(
        'drop',
        async (e) => {
            this.count = 0;

            await dropHandler(e.dataTransfer!.files);
        },
        false,
    );
};

export default init;
