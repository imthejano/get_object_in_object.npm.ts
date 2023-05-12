import getObjectInObject from '../src/main'

describe('Given a path divided by dots (example: "foo.bar") you can find an object inside another parent object', () => {
	const object = {
		foo: {
			bar: 'hello world',
		},
	}
	const emptyObject = {}
	const path = 'foo.bar'
	it('must find the object inside the parent object through the given path', () => {
		const result = getObjectInObject(object, path)
		expect(result).toBe('hello world')
	})
	it('must not find any object since it is an empty object', () => {
		const result = getObjectInObject(emptyObject, path)
		expect(result).toBe(undefined)
	})
})
