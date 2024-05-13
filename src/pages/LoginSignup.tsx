import styled from "styled-components";
import LoginHero from "../components/login-signup-components/Loginhero";
import Login from "../components/login-signup-components/Login";
import SignUp from "../components/login-signup-components/SignUp";

import { Helmet } from "react-helmet";
// import Login from "../components/login-signup-components/Login";

const LoginSignUp = () => {
  return (
    <div>
      {/* Helmet for SEO */}
      <Helmet>
        <title>შესვლა /რეგისტრაცია</title>
        <meta name="description" content="Your meta description goes here." />
        <link rel="canonical" href="https://www.yourwebsite.com/main" />
        <meta property="og:title" content="Your Page Title" />
        <meta property="og:description" content="Your meta description goes here." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourwebsite.com/main" />
        <meta property="og:image" content="https://www.yourwebsite.com/og-image.jpg" />
      </Helmet>

      <div>
        <LoginHero />
        <Container>
          <Login />
          <SignUp />
        </Container>
      </div>
    </div>
  );
};
export default LoginSignUp;

const Container = styled.div`
  display: flex;
  align-items: top;
  justify-content: space-around;
  gap: 30px;
  margin-top: 35px;
  margin-bottom: 75px;
  padding: 0 100px;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
    padding: 0 50px;
  }
`;
