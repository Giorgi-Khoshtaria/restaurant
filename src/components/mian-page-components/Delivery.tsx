// import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";
import moto from "../../assets/header/moto.png";
import delivery from "../../assets/mainpage/delivery-main.png";
import { Link } from "react-router-dom";

const Delivery = () => {
  return (
    <Container>
      <MainTitle>შეკვეთა</MainTitle>
      <Wrapper>
        <div>
          <h2>მიწოდება სწორ დროსა და ადგილზე </h2>

          <Maintext>
            გამარჯობა, ჩვენ მოხარულები ვართ მოგესალმოთ FoodCave-ში, თქვენს ახალ საყვარელ კულინარიულ
            დანიშნულებაზე. ქალაქის/სამეზობლოს გულში მოთავსებული FoodCave უფრო მეტია, ვიდრე უბრალოდ
            რესტორანი; ეს არის გამოცდილება, რომელიც ელოდება დატკბობას.
          </Maintext>
          <InfoFooter>
            <CartInfos>
              <div>
                <h3>შეკვეთა</h3>
                <p>+995 599 252 525</p>
              </div>
              <img src={moto} alt="moto" />
            </CartInfos>
            <Link to="/items">შეუკვეთეთ ეხლავე</Link>
          </InfoFooter>
        </div>
        <MainImg src={delivery} alt="delivery" />
      </Wrapper>
    </Container>
  );
};

export default Delivery;
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 94px;
  padding: 0 100px;
  @media (max-width: 795px) {
    padding: 8px 50px;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
  h2 {
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${defaultTheme.colors.blue};
    text-align: center;

    @media (max-width: 500px) {
      font-size: 30px;
    }
  }
  a {
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
    border: 0;
    background-color: ${defaultTheme.colors.red};
    color: ${defaultTheme.colors.floralwhite};
    border-radius: 10px;
    padding: 10px 20px;
    text-decoration: none;

    @media (max-width: 500px) {
      font-size: 18px;
    }
  }
`;
const MainImg = styled.img`
  @media (max-width: 500px) {
    max-width: 400px;
  }
  @media (max-width: 450px) {
    max-width: 300px;
  }
`;
const MainTitle = styled.h1`
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: ${defaultTheme.colors.red};
  margin-bottom: 25px;
`;
const Maintext = styled.p`
  max-width: 520px;
  margin-top: 29px;
  margin-bottom: 69px;
  color: ${defaultTheme.colors.blue};
  @media (max-width: 500px) {
    font-size: 16px;
  }
`;
const InfoFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 500px) {
    flex-direction: column;
    gap: 20px;
  }
`;
const CartInfos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 44px;

  h3 {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${defaultTheme.colors.blue};
  }
  a {
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${defaultTheme.colors.blue};
    text-decoration: none;
  }
  img {
    margin-left: 10px;
  }
`;
