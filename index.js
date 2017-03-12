
module.exports = {
    isFunction: (object, key) => {
        if (typeof key !== 'string') {
            throw new Error(`Expected an string for property name`);
        }
        if (typeof object !== 'object') {
            throw new Error(`Expected an object for property '${key}'`);
        }
        if (typeof object[key] !== 'function') {
            throw new Error(`Expected a function for '${key}'`);
        }
    }
}
