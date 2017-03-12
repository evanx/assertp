
const asserta = require('../index.js');

const object = {
  f: () => true,
  s: 'string'
}

const errors = [];

asserta.isFunction(object, 'f');

try {
  asserta.isFunction(object, 's');
  errors.push('s');
} catch (err) {
}

if (errors.length) {
   console.error({errors});
   process.exit(1);
}

