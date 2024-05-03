import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";
import gigi from "../../assets/about-us//gigi.jpg";
import ogisha from "../../assets/about-us/ogisha.jpg";
import zurasha from "../../assets/about-us/zurasha.jpg";
import TeamCards from "./TeamCards";
const OurTeam = () => {
  return (
    <Container>
      <h1>ჩვენი გუნდი</h1>
      <p>შრომისმოყვარე გუნდი რესტორნის უკან</p>
      <CardsWrapper>
        <TeamCards
          img={gigi}
          title={"გიორგი გამრეკელი"}
          description={
            " გაიცანით, შეფ გიორგი გამრეკელი, ჩვენი კულინარიული მაესტრო. ორ ათწლეულზე მეტი გამოცდილებით, ის ამზადებს დაუვიწყარ კერძებს, რომლებიც აერთიანებს ინოვაციასა და ტრადიციას."
          }
        />
        <TeamCards
          img={ogisha}
          title={"გიორგი ოღიაშვილი"}
          description={
            " გაიცანით, გიორგი ოღიაშვილი, ჩვენი კულინარიის ვირტუოზი. კულინარიული ხელოვნებით გატაცებით და შემოქმედებითობის უნარით, ჯონი თავის მიერ შექმნილ ყველა კერძს უნიკალურ არომატს ანიჭებს."
          }
        />
        <TeamCards
          img={zurasha}
          title={"ზურა ჩარციძე"}
          description={
            "წარმოგიდგენთ, ზურა ჩარციძე, ჩვენს არაჩვეულებრივ კულინარიულ მხატვარს. სრულყოფილებისადმი ერთგულებითა და დეტალების დაკვირვებით, ჯესიკა ამზადებს კერძებს, რომლებიც ისეთივე ლამაზი და გემრიელია."
          }
        />
      </CardsWrapper>
    </Container>
  );
};
export default OurTeam;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 60px;
  margin-bottom: 100px;
  padding: 0 100px;
  h1 {
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${defaultTheme.colors.blue};
  }
  p {
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${defaultTheme.colors.blue};
  }
  @media (max-width: 768px) {
    padding: 0 50px;
  }
`;

const CardsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  @media (max-width: 1150px) {
    column-gap: 50px;
    justify-content: center;
  }
`;
