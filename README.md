# objecta

Assert on an object's property.

Implementation:
```javascript
    get: (object, key) => {
        if (typeof key !== 'string') {
            throw new Error(`Expected an string for property name`);
        }
        if (typeof object !== 'object') {
            throw new Error(`Expected an object for property '${key}'`);
        }
        return object[key];
    },
    ensure: (object, key) => {
        const value = ex.get(object, key);
        if (value === undefined) {
            throw new Error(`Expected property '${key}'`);
        }
        return value;
    },
    has: (object, key) => {
        const value = ex.get(object, key);
        if (value === undefined) {
            return false;
        }
        return true;
    },
    hasType: (object, key, type) => {
        if (typeof type !== 'string') {
            throw new Error(`Expected a type specification for '${key}'`);
        }
        const value = ex.get(object, key);
        if (value === undefined) {
            return false;
        }
        if (typeof value !== type) {
            throw new Error(`Expected type '${type}' for '${key}'`);
        }
        return true;
    },
```

<hr>
https://twitter.com/@evanxsummers
