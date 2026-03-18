const DEFAULT_SITE_URL = "https://logibuyltd.com";

function normalizeSiteUrl(url: string) {
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

export function getSiteUrl() {
  return normalizeSiteUrl(
    process.env.SITE_URL ??
      process.env.NEXT_PUBLIC_SITE_URL ??
      DEFAULT_SITE_URL
  );
}

export const siteUrl = getSiteUrl();
