// import React from "react";
import Blog from "../../assets/about-us/blog.png";
import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";
const AboutBlog = () => {
  return (
    <Container>
      <Wrapper>
        {" "}
        <img src={Blog} alt="blog" />
        <Info>
          <h2>
            FoodCave-ში ჩვენი მისიაა მივაწოდოთ განსაკუთრებული სასადილო გამოცდილება, რომელიც
            აღნიშნავს კულინარიული ტრადიციების მრავალფეროვნებას და ხელს უწყობს საზოგადოებისა და
            კავშირის გრძნობას. ჩვენ გვჯერა, რომ საკვები უფრო მეტია, ვიდრე უბრალოდ საკვები - ეს არის
            ენა, რომელიც სცილდება საზღვრებს, კულტურას და ფონს. სწორედ ამიტომ, ჩვენ მიძღვნილი ვართ
            გემოების გობელენის მომსახურეობაზე, რომელიც ასახავს ჩვენი სამყაროს მდიდარ გობელენს.
          </h2>
          <p>
            ხარისხი, კრეატიულობა და მდგრადობა არის ყველაფრის საფუძველი, რასაც ჩვენ ვაკეთებთ.
            უახლესი, ადგილობრივად მოპოვებული ინგრედიენტების მოპოვებიდან დაწყებული, ინოვაციური
            კერძების დამზადებამდე, რომლებიც სცილდება გემოს საზღვრებს, ჩვენ მზად ვართ ვიყოთ
            სრულყოფილება ჩვენი საქმიანობის ყველა ასპექტში. მაგრამ ჩვენი ვალდებულება სცილდება
            ფირფიტას.
          </p>
        </Info>
      </Wrapper>
    </Container>
  );
};

export default AboutBlog;

const Container = styled.div`
  margin-top: 30px;
  padding: 0 100px;
  h2 {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${defaultTheme.colors.blue};
    margin-bottom: 40px;
    text-align: justify;
    @media (max-width: 1100px) {
      margin-bottom: 20px;
    }
  }
  p {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${defaultTheme.colors.blue};
    text-align: justify;
    margin-bottom: 10px;
  }
  img {
    @media (max-width: 650px) {
      width: 400px;
    }
    @media (max-width: 500px) {
      width: 300px;
    }
    @media (max-width: 450px) {
      width: 200px;
    }
  }

  @media (max-width: 795px) {
    padding: 8px 50px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 30px;
  padding: 45px 64px;
  border: 3px solid ${defaultTheme.colors.red};
  border-radius: 20px;
  @media (max-width: 1200px) {
    flex-direction: column;
    padding: 25px 34px;
  }
`;
const Info = styled.div`
  max-width: 600px;
`;
