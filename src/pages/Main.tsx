import Delivery from "../components/mian-page-components/Delivery";
import MainHero from "../components/mian-page-components/MainHero";
import MainPageBlog from "../components/mian-page-components/MainPageBlog";
import Manus from "../components/mian-page-components/Manus";
import Offers from "../components/mian-page-components/Offers";
import OurRestorant from "../components/mian-page-components/OurRestorant";
import PopularIntems from "../components/mian-page-components/PopularItems";
import Priority from "../components/mian-page-components/Priority";
import SpecialManu from "../components/mian-page-components/SpecialManu";
import { Helmet } from "react-helmet";

const Main: React.FC = () => {
  return (
    <div>
      {/* Helmet for SEO */}
      <Helmet>
        <title>მთავარი გვერდი</title>
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

      {/* Spinner */}

      <div>
        {/* Main content components */}
        <MainHero />
        <PopularIntems />
        <MainPageBlog />
        <Offers />
        <Manus />
        <SpecialManu />
        <OurRestorant />
        <Delivery />
        <Priority />
      </div>
    </div>
  );
};

export default Main;

// const MainContent = styled.div<{ loading: boolean }>`
//   display: ${(props) => (props.loading ? "none" : "block")};
// `;
