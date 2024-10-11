import authorAvatar from "../../public/images/author/sassi.png";
export const siteConfig = {
  name: "Mdx Blog Template",
  description:
    "MDX Blog Template is a simple implementation of a markdown static blog. Built with Next.js 14 and velite js.",
  author: "soulwax",
  authorImage: authorAvatar,
  social: {
    github: "https://github.com/velour-velvet",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
  },
};

export type SiteConfig = typeof siteConfig;
