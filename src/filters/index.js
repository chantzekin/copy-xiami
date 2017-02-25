export function formatCount(v) {
    if (v < 9999) {
        return v
    } else {
        return (v / 10000).toFixed(1) + '万'
    }
}