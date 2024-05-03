import story from "../../assets/about-us/image_ourStory_.png";
import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";

const OurStory = () => {
  return (
    <StoryContainer>
      <h1>ჩვენი ისტორია</h1>
      <Wrapper>
        <p>
          FoodCave არის საკვებისადმი უწყვეტი ვნების კულმინაცია და სტუმართმოყვარეობისადმი ღრმად
          ფესვგადგმული ერთგულება. დაარსებული კულინარიის მოყვარულთა გუნდის მიერ, ჩვენი მოგზაურობა
          დაიწყო საერთო ოცნებით: შეგვექმნა სასადილო გამოცდილება, რომელიც სცილდება მხოლოდ უგემრიელეს
          საკვებს. ჩვენ გვინდოდა აგვეშენებინა სათემო ცენტრი, სადაც მეგობრები, ოჯახები და საკვების
          მოყვარულები ერთნაირად შეგვეძლო გაერთიანდნენ უგემრიელესი გემოების დასაგემოვნებლად, მუდმივი
          კავშირების დასამყარებლად და დაუვიწყარი მოგონებების შესაქმნელად.
        </p>
        <img src={story} alt="story" />
      </Wrapper>
    </StoryContainer>
  );
};
export default OurStory;

const StoryContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 25px;
  margin-top: 70px;
  padding: 0 100px;

  h1 {
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${defaultTheme.colors.red};
  }
  @media (max-width: 795px) {
    padding: 0px 50px;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 30px;
  P {
    max-width: 600px;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: justify;
    color: ${defaultTheme.colors.blue};
  }
  @media (max-width: 1200px) {
    flex-direction: column;
  }
  @media (max-width: 550px) {
    img {
      width: 400px;
    }
  }
  @media (max-width: 450px) {
    img {
      width: 300px;
    }
  }
`;
