# JSON Validator

Simple JSON Validator through parameters for browser and Node.js.

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
var valid = validator(json, ['parameter1', 'parameter2', 'parameter3.nested']);
```

If you want a wildcard search in a nested json just type:

```js
var valid = validator(json, ['parameter1.*']);
```

You can also only test if one particular property is in a JSON.

```js
var valid = validator(json, ['parameter']);
```

It is as simple as this. Returns true if the JSON has all the given Parameters, false if not.

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
