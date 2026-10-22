export default interface DragFileI {
    count: number;

    init(
        this: DragFileI,
        data: {
            area: HTMLElement;
            overHandler: () => Promise<void>;
            leaveHandler: () => Promise<void>;
            dropHandler: (files: FileList) => Promise<void>;
        },
    ): void;
}
