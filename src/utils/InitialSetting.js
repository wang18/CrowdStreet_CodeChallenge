export function initSetting() {
    localStorage.clear();
    localStorage.setItem('tables', JSON.stringify({
        red:'',
        green:'',
        blue:''}));
}
