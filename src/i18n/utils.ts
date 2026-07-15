import type { Lang } from './translations';

export function getLangFromUrl(url: URL): Lang {
  const pathname = url.pathname;
  if (pathname.startsWith('/en')) {
    return 'en';
  }
  return 'es';
}
