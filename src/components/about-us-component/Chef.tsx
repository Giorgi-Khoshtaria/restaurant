import { Link } from "react-router-dom";
import chefimg from "../../assets/about-us/chef.png";
import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";

const Chef = () => {
  return (
    <ChefContainer>
      <div>
        <h2>გემრიელი და ხრაშუნა</h2>
        <h1>ჩვენი შეფები</h1>
        <p>
          კეთილი იყოს თქვენი მობრძანება ჩვენს კულინარიულ თავშესაფარში, სადაც გემოები ცეკვავს და
          არომატები ხიბლავს. ჩვენი შეფი ასხამს გული და სული ყველა კერძში, გამოცდილების შემუშავება,
          რომელიც აოცებს გემოვნების კვირტებს და ანთებს გრძნობებს. გამოიკვლიეთ კულინარიული
          სიამოვნებების სამყარო, სადაც თითოეული ლუკმა მოგვითხრობს ისტორიას ვნება და კრეატიულობა.
        </p>

        <LinkDiv>
          <Link to="/items">იხილეთ მენიუ</Link>
        </LinkDiv>
      </div>
      <img src={chefimg} alt="chefimg" />
    </ChefContainer>
  );
};

export default Chef;

const ChefContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 15px 100px;
  margin-top: 30px;
  background-color: ${defaultTheme.colors.lightred};
  @media (max-width: 900px) {
    flex-direction: column;
  }
  @media (max-width: 795px) {
    padding: 15px 50px;
  }

  h2 {
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${defaultTheme.colors.red};
  }
  h1 {
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${defaultTheme.colors.blue};
    margin-bottom: 10px;
  }
  p {
    max-width: 600px;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${defaultTheme.colors.blue};
    margin-bottom: 32px;
    text-align: justify;
  }
`;
const LinkDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  transform: translateX(280px);

  a {
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration: none;
    background-color: ${defaultTheme.colors.red};
    color: ${defaultTheme.colors.floralwhite};
    padding: 15px 29px;
    border-radius: 20px;
  }
  @media (max-width: 1050px) {
    transform: translateX(150px);
  }
  @media (max-width: 900px) {
    transform: translateX(0px);
  }
`;
