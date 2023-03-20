import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetadata = () => {
  const data: any = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          twitterUsername
          siteUrl
          contactPoint {
            telephone
            email
          }
        }
      }
    }
  `);

  return data?.site?.siteMetadata;
};
