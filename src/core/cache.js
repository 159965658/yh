

const cache = {}
const cacheEnum = ['user']
cache.get = (key) => {
    const c = window.sessionStorage.getItem(key);
    if (c) {
        return JSON.parse(c);
    }
    return null;
}
cache.set = (key, object) => {
    window.sessionStorage.setItem(key, JSON.parse(object));
}
cache.remove(key) = () => {
    window.sessionStorage.removeItem(key);
}
export { cache, cacheEnum }