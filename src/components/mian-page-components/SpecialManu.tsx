import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";
import SpecialManucards from "./SpecialManuCards";
import burger from "../../assets/mainpage/special_burger.png";
import chicken from "../../assets/mainpage/special_chicken.png";
import grilled from "../../assets/mainpage/special_grilled.png";
import pizza from "../../assets/mainpage/special_pizza.png";
import hotdogs from "../../assets/mainpage/special_hotdog.png";
import skewers from "../../assets/mainpage/special_skewers.png";
import salad from "../../assets/mainpage/special_salad.png";
import puri from "../../assets/mainpage/special_dahipuri.png";
import cockolate from "../../assets/mainpage/special_chocolate.png";
import cocktail from "../../assets/mainpage/special_cocktail.png";

const SpecialManu = () => {
  return (
    <Container>
      <div>
        <h1>SPECIALS MANU FOR ALL TIME</h1>
      </div>
      <CardsWrapper>
        <SpecialManucards img={burger} text={"Burger"} />
        <SpecialManucards img={chicken} text={"Fried chicken"} />
        <SpecialManucards img={grilled} text={"Doner with Grilled Chicken"} />
        <SpecialManucards img={pizza} text={"Pizza"} />
        <SpecialManucards img={hotdogs} text={"Hot Dogs"} />
        <SpecialManucards img={skewers} text={"Chicken Skewers"} />
        <SpecialManucards img={salad} text={"Greek Salad"} />
        <SpecialManucards img={puri} text={"Dahi Puri"} />
        <SpecialManucards img={cockolate} text={"Ice cream with Chocolate"} />
        <SpecialManucards img={cocktail} text={"Cocktail Glasses"} />
      </CardsWrapper>
    </Container>
  );
};
export default SpecialManu;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 0 100px;
  margin-top: 70px;
  @media (max-width: 795px) {
    padding: 0px 50px;
  }
  h1 {
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${defaultTheme.colors.red};
  }
`;

const CardsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-content: center;
  align-items: top;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (max-width: 750px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 400px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
