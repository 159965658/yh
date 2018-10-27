export default (value) => {
    const cache = $cache.get('nationCache');
    let name = ''
    if (cache) {
        const mode = cache.find(p => p.id == value);
        if (mode) {
            name = mode.name;
        }
        // name = cache.find(p => p.id == value).name;
    }
    return name;
}