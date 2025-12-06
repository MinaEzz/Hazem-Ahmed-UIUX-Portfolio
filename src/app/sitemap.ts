import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    {
      url: "https://hazem-ahmed-uiux-portfolio.vercel.app",
      lastModified: new Date(),
    },
    {
      url: `https://hazem-ahmed-uiux-portfolio.vercel.app/#home`,
      lastModified: new Date(),
    },
    {
      url: `https://hazem-ahmed-uiux-portfolio.vercel.app/#services`,
      lastModified: new Date(),
    },
    {
      url: `https://hazem-ahmed-uiux-portfolio.vercel.app/#about`,
      lastModified: new Date(),
    },
    {
      url: `https://hazem-ahmed-uiux-portfolio.vercel.app/#skills`,
      lastModified: new Date(),
    },
    // {
    //   url: `https://hazem-ahmed-uiux-portfolio.vercel.app/portfolio`,
    //   lastModified: new Date(),
    // },
    {
      url: `https://hazem-ahmed-uiux-portfolio.vercel.app/#contact`,
      lastModified: new Date(),
    },
  ];

  return routes;
}
