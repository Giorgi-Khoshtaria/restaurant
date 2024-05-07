import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";
// import { SpecialManuCardsProps } from "../interface";

interface SpecialManuCardsProps {
  img: string;
  text: string;
}

const SpecialManucards: React.FC<SpecialManuCardsProps> = ({ img, text }) => {
  return (
    <CardsContainer>
      <CardsContent>
        <img src={img} alt="img" />
        <p>{text}</p>
      </CardsContent>
    </CardsContainer>
  );
};

export default SpecialManucards;

const CardsContainer = styled.div`
  margin-top: 31px;
  cursor: pointer;
  padding: 10px 5px 5px 5px;

  &:hover {
    background-color: ${defaultTheme.colors.red};
    border-radius: 20px;
    animation: pulse 2s infinite alternate;

    p {
      color: ${defaultTheme.colors.floralwhite};
    }
  }

  p {
    width: 170px;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${defaultTheme.colors.red};
    transition: color 0.3s ease-in-out;
  }

  img {
    border-radius: 10px;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.05);
    }
  }
`;

const CardsContent = styled.div``;
