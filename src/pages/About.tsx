// import React from "react";

import AboutHero from "../components/about-us-component/AboutHero";
import AboutBlog from "../components/about-us-component/AboutBlog";
import OurStory from "../components/about-us-component/OurStory";
import Chef from "../components/about-us-component/Chef";
import OurTeam from "../components/about-us-component/OurTeam";
import { Helmet } from "react-helmet";
const About = () => {
  return (
    <div>
      {/* Helmet for SEO */}
      <Helmet>
        <title>ჩვენს შესახებ</title>
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
        <AboutHero />
        <AboutBlog />
        <OurStory />
        <Chef />
        <OurTeam />
      </div>
    </div>
  );
};
export default About;
