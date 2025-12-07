import type { Metadata } from "next";
import { Lato, K2D } from "next/font/google";
import { RootProvider } from "@/providers/RootProvider";
import Header from "@/components/common/header/Header.component";
import Footer from "@/components/common/footer/Footer.component";
import "./globals.css";
import "@/scss/style.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const lato = Lato({
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

const k2d = K2D({
  variable: "--font-k2d",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hazem Ahmed | Senior UI/UX Designer",
  description:
    "Portfolio of Hazem Ahmed, a Senior UI/UX Designer based in Egypt with over 5 years of experience designing seamless user experiences, product interfaces, and digital products. Explore case studies, UX processes, and modern UI design projects.",
  keywords: [
    "Hazem Ahmed",
    "UI UX Designer Egypt",
    "UX Designer Portfolio",
    "UI Designer Portfolio",
    "UX Research",
    "Senior UI UX Designer",
    "User Experience",
    "User Interface Design",
    "Product Designer",
    "Digital Product Design",
    "UI UX Case Studies",
    "UIUX Freelance",

    // Arabic
     "مصمم UI UX",
  "مصمم تجربة مستخدم",
  "مصمم واجهات مستخدم",
  "مصمم منتجات رقمية",
  "محفظة أعمال UX",
  "خدمات تصميم UI UX",
  "فريلانس UI UX"
  ],
  authors: [
    {
      name: "Hazem Ahmed",
      url: "https://hazem-ahmed-uiux-portfolio.vercel.app",
    },
  ],
  creator: "Hazem Ahmed",
  publisher: "Hazem Ahmed Portfolio",
  applicationName: "Hazem Ahmed Portfolio",
  robots: "index, follow",
  openGraph: {
    title: "Hazem Ahmed | Senior UI/UX Designer",
    description:
      "Portfolio of Hazem Ahmed, Senior UI/UX Designer with over 5 years of experience.",
    url: "https://hazem-ahmed-uiux-portfolio.vercel.app",
    siteName: "Hazem Ahmed Portfolio",
    images: [
      {
        url: "https://www2.0zz0.com/2025/11/27/12/793130784.jpg",
        width: 1200,
        height: 630,
        alt: "Hazem Ahmed - Senior UI/UX Designer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hazem Ahmed | Senior UI/UX Designer",
    description:
      "Portfolio of Hazem Ahmed, Senior UI/UX Designer with over 5 years of experience.",
    images: ["https://www2.0zz0.com/2025/11/27/12/793130784.jpg"],
    creator: "@hazem_ux",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="jMqpBf5fVsLDZpygSRWl3a_VjhXb6d5OIE7fSo8IdAU"
        />
      </head>
      <body
        className={`${lato.className} ${k2d.variable} antialiased bg-(--background)`}
      >
        <RootProvider>
          <Header />
          {children}
          <Footer />
          <ToastContainer position="top-right" theme="dark" />
        </RootProvider>
      </body>
    </html>
  );
}
