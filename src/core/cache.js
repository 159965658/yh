

const cache = {}
const cacheEnum = {'user':"userSession"};
(function () {

    cache.get = (key) => {
        const c = window.sessionStorage.getItem(key);
        if (c) {
            return JSON.parse(c);
        }
        return null;
    }
    cache.set = (key, object) => {
        window.sessionStorage.setItem(key, JSON.stringify(object));
    }
    cache.remove = (key) => {
        window.sessionStorage.removeItem(key);
    }

}())
export { cache, cacheEnum }