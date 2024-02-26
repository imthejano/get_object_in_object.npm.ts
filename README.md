# Get object in object

Given a path divided by dots (example: 'foo.bar') you can find an object inside another parent object

## Installation

```bash
npm install @imjano/get_object_in_object
```

## Usage

```javascript
const path = 'foo.bar'
const obj = { foo: { bar: 'hello' } }
console.log(getObjectInObject(obj, path)) //output: 'hello'
```
