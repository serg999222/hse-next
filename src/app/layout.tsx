import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Upskilling for GTM leaders and teams in the Age of AI | Hard Skill Exchange",
  description: "Join thousands of B2B operators mastering GTM and AI skills with 1:1 expert sessions – powered by a professional network of 20K+ GTM leaders from Salesforce, Amazon, Snowflake, Clay, OpenAI, and beyond.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="Content-Security-Policy" />
        <link rel="shortcut icon" href="https://hardskill.exchange/wp-content/themes/hse-web/assets/images/favicon.ico?ver=0.1721" type="image/x-icon" />
        <link rel="icon" type="image/svg+xml" href="https://hardskill.exchange/wp-content/themes/hse-web/assets/images/favicon.svg?ver=0.1721" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://hardskill.exchange/wp-content/themes/hse-web/assets/images/favicon-96x96.png?ver=0.1721" />
        <link rel="icon" type="image/png" sizes="192x192" href="https://hardskill.exchange/wp-content/themes/hse-web/assets/images/web-app-manifest-192x192.png?ver=0.1721" />
        <link rel="icon" type="image/png" sizes="512x512" href="https://hardskill.exchange/wp-content/themes/hse-web/assets/images/web-app-manifest-512x512.png?ver=0.1721" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://hardskill.exchange/wp-content/themes/hse-web/assets/images/apple-touch-icon.png?ver=0.1721" />
        <link rel="apple-touch-icon" sizes="144x144" href="https://hardskill.exchange/wp-content/themes/hse-web/assets/images/apple-touch-icon.png?ver=0.1721" />
        <link rel="apple-touch-icon" sizes="114x114" href="https://hardskill.exchange/wp-content/themes/hse-web/assets/images/apple-touch-icon.png?ver=0.1721" />
        <meta name="SKYPE_TOOLBAR" content="SKYPE_TOOLBAR_PARSER_COMPATIBLE" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        {/* <link rel="manifest" href="/manifest.json"> */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        {/* This site is optimized with the Yoast SEO plugin v25.4 - https://yoast.com/wordpress/plugins/seo/ */}
        <title>Upskilling for GTM leaders and teams in the Age of AI | Hard Skill Exchange</title>
        <meta name="description" content="Join thousands of B2B operators mastering GTM and AI skills with 1:1 expert sessions – powered by a professional network of 20K+ GTM leaders from Salesforce, Amazon, Snowflake, Clay, OpenAI, and beyond." />
        <link rel="canonical" href="https://hardskill.exchange/?nowprocket" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Upskilling for GTM leaders and teams in the Age of AI | Hard Skill Exchange" />
        <meta property="og:description" content="Join thousands of B2B operators mastering GTM and AI skills with 1:1 expert sessions – powered by a professional network of 20K+ GTM leaders from Salesforce, Amazon, Snowflake, Clay, OpenAI, and beyond." />
        <meta property="og:url" content="https://hardskill.exchange/" />
        <meta property="og:site_name" content="HSE" />
        <meta property="article:modified_time" content="2025-08-17T05:50:45+00:00" />
        <meta property="og:image" content="https://hardskill.exchange/wp-content/uploads/2025/02/trumbnail-hse.png" />

        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://hardskill.exchange/wp-content/uploads/2025/02/trumbnail-hse.png" />
        {/* / Yoast SEO plugin. */}
        <link rel="stylesheet" id="wp-block-library-css" href="https://hardskill.exchange/wp-includes/css/dist/block-library/style.min.css?ver=6.8.2" type="text/css" media="all" />
        <link rel="stylesheet" id="Montserrat-css" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;900&display=swap" type="text/css" media="all" />
        <link rel="stylesheet" id="Material-css" href="https://fonts.googleapis.com/icon?family=Material+Icons" type="text/css" media="all" />
        <link rel="stylesheet" id="hse-icons-css" href="https://hardskill.exchange/wp-content/themes/hse-web/assets/font-icons/css/fontello.css" type="text/css" media="all" />
        <link rel="stylesheet" id="slick.scss-css" href="https://hardskill.exchange/wp-content/themes/hse-web/assets/css/plugins/slick.css" type="text/css" media="all" />
        <link rel="stylesheet" id="hse-for-teams-css" href="https://hardskill.exchange/wp-content/themes/hse-web/assets/css/hse-for-teams.css?v=0.1721&ver=6.8.2" type="text/css" media="all" />
        <link rel="stylesheet" id="recordings-css" href="https://hardskill.exchange/wp-content/themes/hse-web/assets/css/recordings.css?v=0.1721&ver=6.8.2" type="text/css" media="all" />
        <link rel="stylesheet" id="general-css" href="https://hardskill.exchange/wp-content/themes/hse-web/assets/css/general.css?v=0.1721&ver=6.8.2" type="text/css" media="all" />
        <link rel="stylesheet" id="form-css" href="https://hardskill.exchange/wp-content/themes/hse-web/assets/css/form-styles.css?v=0.1721&ver=6.8.2" type="text/css" media="all" />
        <link rel="stylesheet" id="header-footer-css" href="https://hardskill.exchange/wp-content/themes/hse-web/assets/css/header-footer.css?v=0.1721&ver=6.8.2" type="text/css" media="all" />
        <link rel="stylesheet" id="single-ama-css" href="https://hardskill.exchange/wp-content/themes/hse-web/assets/css/ama-sessions/single-ama.css?v=0.1721&ver=6.8.2" type="text/css" media="all" />
        <link rel="stylesheet" id="global-header-width-carousel-css" href="https://hardskill.exchange/wp-content/themes/hse-web/assets/css/global-header-width-carousel.css?v=0.1721&ver=6.8.2" type="text/css" media="all" />
        <link rel="stylesheet" id="templates-css" href="https://hardskill.exchange/wp-content/themes/hse-web/assets/css/templates.css?v=0.1721&ver=6.8.2" type="text/css" media="all" />
        <link rel="stylesheet" id="wordpress-css" href="https://hardskill.exchange/wp-content/themes/hse-web/assets/css/wordpress.css?v=0.1721&ver=6.8.2" type="text/css" media="all" />
        <link rel="stylesheet" id="default-page-css" href="https://hardskill.exchange/wp-content/themes/hse-web/assets/css/default-page.css?v=0.1721&ver=6.8.2" type="text/css" media="all" />
        <link rel="stylesheet" id="global_buttons-css" href="https://hardskill.exchange/wp-content/themes/hse-web/assets/css/global_buttons.css?v=0.1721&ver=6.8.2" type="text/css" media="all" />
        <link rel="stylesheet" id="homepage2-css" href="https://hardskill.exchange/wp-content/themes/hse-web/assets/css/homepage2.css?v=0.1721&ver=6.8.2" type="text/css" media="all" />
        <link rel="stylesheet" id="some-styles-css" href="https://hardskill.exchange/wp-content/themes/hse-web/assets/css/some-style.css?v=0.1721&ver=6.8.2" type="text/css" media="all" />
        <link rel="stylesheet" id="add-responsive-css" href="https://hardskill.exchange/wp-content/themes/hse-web/assets/css/responsive.css?v=0.1721&ver=6.8.2" type="text/css" media="all" />
        <link rel="stylesheet" id="templates-responsive-css" href="https://hardskill.exchange/wp-content/themes/hse-web/assets/css/templates-responsive.css?v=0.1721&ver=6.8.2" type="text/css" media="all" />
        <link rel="stylesheet" id="x-lines-css" href="https://hardskill.exchange/wp-content/themes/hse-web/assets/css/x-lines.css?v=0.1721&ver=6.8.2" type="text/css" media="all" />
        <link rel="shortlink" href="https://hardskill.exchange/" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <Script type="text/javascript"
          src="https://hardskill.exchange/wp-content/themes/hse-web/assets/js/scripts.js?v=0.1721&amp;ver=6.8.2"
          id="scripts-js"></Script>
        <Script type="text/javascript"
          src="https://hardskill.exchange/wp-content/themes/hse-web/assets/js/front-page/homepage2-template.js?ver=0.1721"
          id="homepage2-template-js"></Script>
      </body>
    </html>
  );
}
