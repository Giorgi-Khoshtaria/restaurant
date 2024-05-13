import CartHero from "../components/cart-components/CartHero";
import Cart from "../components/cart-components/Cart";

import { Helmet } from "react-helmet";

const CartPage = () => {
  return (
    <div>
      {/* Helmet for SEO */}
      <Helmet>
        <title>კალათა</title>
        <meta name="description" content="Your meta description goes here." />
        <link rel="canonical" href="https://www.yourwebsite.com/main" />
        <meta property="og:title" content="Your Page Title" />
        <meta property="og:description" content="Your meta description goes here." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourwebsite.com/main" />
        <meta property="og:image" content="https://www.yourwebsite.com/og-image.jpg" />
      </Helmet>

      <div>
        <CartHero />
        <Cart />
      </div>
    </div>
  );
};

export default CartPage;
