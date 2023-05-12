/**
 *
 * @param object where you want to find the result object
 * @param path  path to find the result object
 * @description Given a path divided by dots (example: 'foo.bar') you can find an object inside another parent object
 * @example
 * const path = 'foo.bar'
 * const obj = { foo: { bar: 'hello' } }
 * console.log( getObjectInObject( obj, path ) ) //output: 'hello'
 */

export default function getObjectInObject(
	object: Record<string, any>,
	path: string | Array<string>
): any {
	if (typeof path == 'string')
		return getObjectInObject(object, path.split('.'))
	else {
		if (path.length <= 0) return undefined
		if (path.length == 1) return object[path[0]]
		else {
			const newObject = object[path[0]]
			path.shift()
			if (newObject) return getObjectInObject(newObject, path)
			else return undefined
		}
	}
}
