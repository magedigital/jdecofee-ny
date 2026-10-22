import { ChequeScanDataT } from '../types';

export default function parseQRCode(d: string): ChequeScanDataT | undefined {
    if (!d) {
        return;
    }

    const [time, amount, fn, fd, fp] = d.split('&').map((item) => item.split('=')[1]);

    const year = time.slice(0, 4);
    const month = time.slice(4, 6);
    const day = time.slice(6, 8);
    const hours = time.slice(9, 11);
    const minutes = time.slice(11, 13);
    const date = `${day}.${month}.${year}`;
    const timeStr = `${hours}:${minutes}`;

    return {
        date,
        time: timeStr,
        amount,
        fn,
        fd,
        fp,
    };
}
