# JSON Validator

Simple JSON Validator through parameters for browser and Node.js. Work in Progress.

## Installation

Via npm on Node:

```
npm install json-parameter-parser
```

## Usage

Reference in your program:

```js
var validator = require('json-parameter-parser');
```

Parse a json
```js
var valid = validator(json, ['parameter1', 'parameter2]);
```
It is a simple as this. Returns true if the JSON has all the given Parameters, false if not.

## Development

```
git clone git://github.com/teuron/json-validator.git
cd json-validator
npm install
npm test
```

## License

MIT

# Contribution

Feel free to [file issues](https://github.com/teuron/json-validator) and submit
[pull requests](https://github.com/teuron/json-validator/pulls) contributions are
welcome :) 

If you submit a pull request, please be sure to add or update corresponding
test cases, and ensure that `npm test` continues to pass.
