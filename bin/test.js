
const asserta = require('../index.js');

const object = {
    f: () => true,
    b: false,
    s: 'string'
}

const errors = [];

asserta.ensureFunction(object, 'f');

try {
    asserta.ensureFunction(object, 's');
    errors.push('s');
} catch (err) {
}

if (errors.length) {
    console.error({errors});
    process.exit(1);
}

if (process.env.NODE_ENV === 'development') {
    console.log({t: typeof true, f: typeof false, u: typeof undefined, n: typeof null});
}
