// import React from "react";
import ContactHero from "../components/contact-components/ContactHero";
import ContactInformation from "../components/contact-components/ContactInformation";

import { Helmet } from "react-helmet";
const Contact = () => {
  return (
    <div>
      {/* Helmet for SEO */}
      <Helmet>
        <title>კონტაქტის გვერდი</title>
        <meta name="description" content="Your meta description goes here." />
        <link rel="canonical" href="https://www.yourwebsite.com/main" />
        <meta property="og:title" content="Your Page Title" />
        <meta property="og:description" content="Your meta description goes here." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourwebsite.com/main" />
        <meta property="og:image" content="https://www.yourwebsite.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Your Page Title" />
        <meta name="twitter:description" content="Your meta description goes here." />
        <meta name="twitter:image" content="https://www.yourwebsite.com/twitter-image.jpg" />
      </Helmet>

      <div>
        <ContactHero />
        <ContactInformation />
      </div>
    </div>
  );
};
export default Contact;
