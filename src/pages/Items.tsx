// Items.tsx
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import ItemsCard from "../components/items-component/ItemsCard";
import ItemsHero from "../components/items-component/ItemsHero";
import { useLocation, Link } from "react-router-dom";

import { defaultTheme } from "../defaultTheme";
import { Helmet } from "react-helmet";

interface Item {
  [_id: string]: any;
  name: string;
  ingredients: string;
  price: number;
  mainImage?: string;
  secondaryImage?: string;
  tertiaryImage?: string;
  descriptions?: string;
  courseType: string;
}

const Items: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [filter, setFilter] = useState<string>("ყველა");
  const location = useLocation();

  useEffect(() => {
    fetchItems();
  }, [filter]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const fetchItems = async () => {
    try {
      const response = await axios.get<Item[]>("http://localhost:5000/get-items");
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const filteredItems =
    filter === "ყველა" ? items : items.filter((item) => item.courseType === filter);

  return (
    <div>
      {/* Helmet for SEO */}
      <Helmet>
        <title>მენიუს გვერდი</title>
        <meta name="description" content="Your meta description goes here." />
        <link rel="canonical" href="https://www.yourwebsite.com/main" />
        <meta property="og:title" content="Your Page Title" />
        <meta property="og:description" content="Your meta description goes here." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourwebsite.com/main" />
        <meta property="og:image" content="https://www.yourwebsite.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Your Page Title" />
        <meta name="twitter:description" content="Your meta description goes here." />
        <meta name="twitter:image" content="https://www.yourwebsite.com/twitter-image.jpg" />
      </Helmet>

      <div>
        <ItemsHero />
        <div>
          <Select>
            <p>Filter by Course Type:</p>
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="ყველა">ყველა</option>
              <option value="მთავარი კერძი">მთავარი კერძი</option>
              <option value="სტარტერი">სტარტერი</option>
              <option value="დესერტი">დესერტი</option>
              <option value="კოკტეილი">კოკტეილი</option>
            </select>
          </Select>{" "}
          <ItemsContainer>
            {filteredItems.map((item, index) => (
              <Link
                key={index}
                to={`/items/${encodeURIComponent(item.name)}/${item._id}`}
                style={{ textDecoration: "none" }}
              >
                <ItemsCard
                  title={item.name}
                  ingredients={item.ingredients}
                  price={item.price}
                  mainimage={item.mainImage || "/default-image.jpg"}
                  courseType={item.courseType}
                />
              </Link>
            ))}
          </ItemsContainer>
        </div>
      </div>
    </div>
  );
};

export default Items;

const ItemsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 50px;
  row-gap: 20px;
  padding: 20px;
`;

const Select = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 20px 0;
  @media (max-width: 450px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
  p {
    margin-left: 80px;
    margin-right: 10px;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    color: ${defaultTheme.colors.blue};
    @media (max-width: 550px) {
      margin: 0;
    }
  }
  select {
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
    color: ${defaultTheme.colors.blue};
    margin-bottom: 5px;
    background-color: ${defaultTheme.colors.lightred};
    &:focus {
      outline: none;
    }
  }
`;
