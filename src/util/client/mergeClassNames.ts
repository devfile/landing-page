/**
 * Merges class names
 *
 * @param classes - class names to merge
 * @returns a string with all class names
 */
export const mergeClassNames = (...classes: string[]): string => classes.filter(Boolean).join(' ');
