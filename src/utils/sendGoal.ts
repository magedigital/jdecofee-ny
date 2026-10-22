window.ymId = 96951425;

export default function sendGoal(name: string, isWin?: boolean): boolean {
    if (!window.ym) {
        // console.log('Not ym in window');
        return false;
    }

    const source = localStorage.getItem('2026utmSource');

    if (isWin && source !== 'winbox' && source !== 'advcake') {
        return false;
    }

    name.split(',').forEach((key) => {
        window.ym!(window.ymId, 'reachGoal', key.replace(/\s/gi, ''));
    });

    return true;
}
