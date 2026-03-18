import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";

type BuildPageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
};

const DEFAULT_IMAGE = "/hero.jpg";

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
  image = DEFAULT_IMAGE,
}: BuildPageMetadataOptions): Metadata {
  const canonicalPath = path === "/" ? "" : path;
  const url = `${siteUrl}${canonicalPath}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "LOGIBUY",
      locale: "es_ES",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}
