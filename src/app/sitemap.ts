import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    {
      url: process.env.BASE_URL || "localhost:3000",
      lastModified: new Date(),
    },
    {
      url: `${process.env.BASE_URL}/#home`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.BASE_URL}/#services`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.BASE_URL}/#about`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.BASE_URL}/#skills`,
      lastModified: new Date(),
    },
    // {
    //   url: `${process.env.BASE_URL}/portfolio`,
    //   lastModified: new Date(),
    // },
    {
      url: `${process.env.BASE_URL}/#contact`,
      lastModified: new Date(),
    },
  ];

  return routes;
}
