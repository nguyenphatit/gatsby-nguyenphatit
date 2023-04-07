import React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";

interface Props {
  title: string;
  description?: string;
  pathname?: string;
  contactPoint?: {
    telephone?: string;
    email?: string;
  };
  children?: string | JSX.Element | JSX.Element[];
}

export const SEO = ({ title, description, pathname, children }: Props) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
    twitterUsername,
    contactPoint,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
    contactPoint,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="twitter:card" content="nguyenphatit" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <meta name="keywords" content={seo.twitterUsername} />
      <meta name="author" content="Phat Nguyen" />
      <meta name="author" content="nguyenphatit" />
      <meta name="author" content="@nguyenphatit" />
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🤘</text></svg>"
      />
      {children}
    </>
  );
};
