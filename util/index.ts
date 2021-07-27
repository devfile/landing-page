/**
 * String that contains localhost or FQDN
 */
export const server: string =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://REPLACEME.com';
