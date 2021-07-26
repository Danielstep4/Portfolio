export const fromNumberToTime = (value: number): string => {
    if(value <= 0) return '00:00'
    const min = Math.floor(value / 60);
    const seconds = value - min * 60;
    return `${min < 10 ? '0' + min : min}:${seconds < 10 ? '0' + seconds: seconds}`
}
