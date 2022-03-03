/**
 * Finds a CSS class in a styles object.
 *
 * @param styles - Styles object
 * @param givenStyle - The style to apply
 * @param defaultStyle - The default style to apply if the givenStyle is not found
 * @returns CSS Class
 */
export function findStyle<T extends Record<string, string>>(
  styles: T,
  givenStyle: keyof T | undefined,
  defaultStyle: keyof T,
): string {
  return styles[
    (Object.keys(styles).find((style) => style === givenStyle) as keyof T | undefined) ||
      defaultStyle
  ];
}
