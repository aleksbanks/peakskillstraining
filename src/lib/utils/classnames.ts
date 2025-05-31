/**
 * Joins class names conditionally.
 * @param names - List of class names, can be string, undefined, or false
 * @returns A string of space-separated class names
 */
export function classnames(...names: Array<string | undefined | false>): string {
	return names.filter(Boolean).join(' ');
}
