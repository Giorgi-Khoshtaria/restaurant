import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";
import { useState } from "react";

const Manus = () => {
  const [activeManu, setActiveManu] = useState("BREAKFAST");

  const handleHeaderClick = (manu) => {
    setActiveRegion(manu);
  };
  const ManuCards = {
    BREAKFAST: [
      { img: "img" },
      {
        meal: "Gazpacho Garlic",
        ingredients: "Chilled tomato, cucumber, garlic, redpepper soup.",
        price: "$55",
      },
      {
        meal: "Pan Con Berenjina Frita",
        ingredients: "Marinated seabass with sour sauce, dill & coriander on bread.",
        price: "$40",
      },
      {
        meal: "New Lubina Marinada",
        ingredients: "Fried aubergine with almond on bread (2 pieces).",
        price: "$45",
      },
      {
        meal: "Gazpacho",
        ingredients: "Atlantic cod fillet, chips, salad, tartare, lemon.",
        price: "$35",
      },
      {
        meal: "Coconut Chia Bowl",
        ingredients: "Marinated seabass with sour saucel & coriander on bread.",
        price: "$95",
      },
      {
        meal: "New Lubina Marinada",
        ingredients: "Atlantic cod fillet, chips, salad, tartare, lemon.",
        price: "$120",
      },
      {
        meal: "Gazpacho Garlic",
        ingredients: "Chilled tomato, cucumber, garlic, redpepper soup.",
        price: "$29",
      },
    ],
    LUNCH: [
      { img: "img" },
      {
        meal: "Spaghetti Bolognese",
        ingredients:
          "Ground beef, onions, garlic, tomatoes,  Italian herbs, Parmesan cheese, and pasta",
        price: "$20",
      },
      {
        meal: "Chicken Pad Thai",
        ingredients: "Rice noodles, chicken, bean sprouts, peanuts, lime, and Pad Thai sauce.",
        price: "$25",
      },
      {
        meal: "Margherita Pizza",
        ingredients: "Pizza dough, tomatoes, fresh mozzarella, basil, olive oil, ",
        price: "$28",
      },
      {
        meal: "Chicken Alfredo Pasta",
        ingredients:
          " Fettuccine pasta, chicken breast, heavy cream, butter, Parmesan cheese, and garlic",
        price: "$30",
      },
      {
        meal: "Vegetable Stir-Fry",
        ingredients: " Mixed vegetables, tofu or chicken, soy sauce, ginger, and garlic.",
        price: "$12",
      },
      {
        meal: "Sushi Roll (California Roll)",
        ingredients:
          " Nori, sushi rice, imitation crab or real crab, avocado, cucumber, and soy sauce.",
        price: "$15",
      },
      {
        meal: "BBQ Pulled Pork Sandwich",
        ingredients: " Pulled pork, barbecue sauce, coleslaw, and a bun",
        price: "$15",
      },
    ],
    DINNER: [
      { img: "img" },
      {
        meal: "Grilled Salmon with Lemon-Dill Sauce",
        ingredients: "Salmon fillets, lemon, dill, olive oil, garlic, salt, and pepper.",
        price: "$25",
      },
      {
        meal: "Beef Stroganoff",
        ingredients:
          "Beef sirloin, mushrooms, onion, garlic, sour cream, beef broth, and egg noodles.",
        price: "$30",
      },
      {
        meal: "Vegetarian Lasagna",
        ingredients: "Lasagna noodles, mozzarella cheese, marinara sauce, spinach, and mushrooms.",
        price: "$30",
      },
      {
        meal: "Teriyaki Chicken Bowl",
        ingredients: "Chicken thighs, soy sauce, honey, ginger, garlic, rice, and vegetables.",
        price: "$19",
      },
      {
        meal: "Eggplant Parmesan",
        ingredients: "Eggplant, breadcrumbs, marinara sauce,Parmesan cheese, and basil.",
        price: "$14",
      },
      {
        meal: "Shrimp Scampi",
        ingredients: "Shrimp, garlic, white wine, lemon, parsley, butter, and linguine.",
        price: "$28",
      },
      {
        meal: "Chicken Fajitas",
        ingredients:
          " Chicken breasts, bell peppers, onions, tortillas, sour cream, and Mexican spices.",
        price: "$33",
      },
    ],
    STARTERS: [
      { img: "img" },
      {
        meal: "Caprese Salad",
        ingredients:
          " Fresh tomatoes, mozzarella cheese, basil, balsamic glaze, olive oil, salt, and pepper.",
        price: "$8",
      },
    ],
  };

  return (
    <ManuContainer>
      <Wrapper>
        <h2>SPECIALS</h2>
        <h1>Check out our menu</h1>
        <p>
          Demoralized by the charms of pleasure of the moment so blinded except to some advantage.
        </p>
      </Wrapper>{" "}
      <div>
        <Navigation>
          <p>BREAKFAST</p>
          <p>LUNCH</p>
          <p>DINNER</p>
          <p>STARTERS</p>
          <p>BEVERAGES</p>
        </Navigation>
        <div></div>
      </div>
    </ManuContainer>
  );
};
export default Manus;

const ManuContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Wrapper = styled.div`
  text-align: center;
  h2 {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${defaultTheme.colors.red};
  }
  h1 {
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${defaultTheme.colors.blue};
    margin-top: 16px;
    margin-bottom: 15px;
  }
  p {
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${defaultTheme.colors.blue};
    margin-bottom: 21px;
  }
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    width: 300px;
    height: 88px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${defaultTheme.colors.red};
    cursor: pointer;
  }
`;
