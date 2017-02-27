export function formatCount(v) {
    if (v < 9999) {
        return v
    } else {
        return (v / 10000).toFixed(1) + '万'
    }
}

export function formatTime(v) {
    let length = Math.floor(parseInt(v));
    let min = Math.floor(value / 60);
    let sec = length % 60;
    if (min < 10) {
        min = '0' + min;
    }
    if (sec < 10) {
        sec = '0' + sec;
    }
    return min + ':' + sec;
}