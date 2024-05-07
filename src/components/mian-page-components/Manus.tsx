import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../../defaultTheme";
import { useState } from "react";
import manucardimg1 from "../../assets/mainpage/manucardimg1.png";
import lunch from "../../assets/mainpage/lounch1.jpg";
import dinner from "../../assets/mainpage/dinner.jpg";
import starter from "../../assets/mainpage/starter.jpg";
import bavengares from "../../assets/mainpage/baveranges.jpg";
import ManuCards from "./Manucards";
import ManuImages from "./ManuImages";

interface MenuType {
  [key: string]: { meal: string; ingredients: string; price: string }[];
}
interface HeaderItemProps {
  active?: boolean;
  onClick: () => void;
  // Add other props as needed
}
interface ImagesCardType {
  [key: string]: { img: string }[];
}
const Manus = () => {
  const [activeManu, setActiveManu] = useState("საუზმე");

  const handleHeaderClick = (manu: React.SetStateAction<string>) => {
    setActiveManu(manu);
  };

  const ImagesCard: ImagesCardType = {
    საუზმე: [{ img: manucardimg1 }],
    სადილი: [{ img: lunch }],
    ვახშამი: [{ img: dinner }],
    სტარტერები: [{ img: starter }],
    სასმელი: [{ img: bavengares }],
  };
  const ManuCard: MenuType = {
    საუზმე: [
      // { img: manucardimg1 },
      {
        meal: "გაზპაჩო ნიორი",
        ingredients: "გაცივებული პომიდორი, კიტრი, ნიორი, წითელი წიწაკის წვნიანი.",
        price: "15₾",
      },
      {
        meal: "პან კონ ბერენჯინა ფრიტა",
        ingredients: "მარინირებული ზღვის ბასი პურზე მჟავე სოუსით, კამა და ქინძი.",
        price: "17₾",
      },
      {
        meal: "ახალი ლუბინა მარინადა",
        ingredients: "შემწვარი ბადრიჯანი ნუშით პურზე (2 ცალი).",
        price: "21₾",
      },
      {
        meal: "გაზპაჩო",
        ingredients: "ატლანტიკური ვირთევზას ფილე, ჩიფსები, სალათი, ტარტარი, ლიმონი.",
        price: "17₾",
      },
      {
        meal: "ქოქოსის ჩიას თასი",
        ingredients: "მარინირებული ზღვის ბასი პურზე მჟავე სოუსით და ქინძი.",
        price: "25₾",
      },
      {
        meal: "ახალი ლუბინა მარინადა",
        ingredients: "ატლანტიკური ვირთევზას ფილე, ჩიფსები, სალათი, ტარტარი, ლიმონი.",
        price: "30₾",
      },
      {
        meal: "გაზპაჩო ნიორი",
        ingredients: "გაცივებული პომიდორი, კიტრი, ნიორი, წითელი წიწაკის წვნიანი.",
        price: "32₾",
      },
    ],
    სადილი: [
      // { img: manucardimg1 },
      {
        meal: "სპაგეტი ბოლონეზი",
        ingredients:
          "საქონლის ხორცი, ხახვი, ნიორი, პომიდორი, იტალიური მწვანილი, ყველი პარმეზანი და მაკარონი",
        price: "30₾",
      },
      {
        meal: "ქათმის პად ტაი",
        ingredients: "ბრინჯის ნუდლები, ქათამი, ლობიოს ყლორტები, არაქისი და პად ტაი სოუსი.",
        price: "25₾",
      },
      {
        meal: "მარგარიტა პიცა",
        ingredients: "პიცის ცომი, პომიდორი, ახალი მოცარელა, რეჰანი, ზეითუნის ზეთი, ",
        price: "28₾",
      },
      {
        meal: "ქათმის ალფრედო მაკარონი",
        ingredients: "ფეტუჩინის მაკარონი, ქათმის მკერდი, ნაღები, კარაქი, ყველი პარმეზანი და ნიორი",
        price: "30₾",
      },
      {
        meal: "შემწვარი ბოსტნეული",
        ingredients: "შერეული ბოსტნეული, ტოფუ ან ქათამი, სოიოს სოუსი, ჯანჯაფილი და ნიორი.",
        price: "12₾",
      },
      {
        meal: "სუშის როლი (კალიფორნიის როლი)",
        ingredients:
          "ნორი, სუშის ბრინჯი, კრაბის იმიტაცია ან ნამდვილი კიბორჩხალა, ავოკადო, კიტრი და სოიოს სოუსი.",
        price: "15₾",
      },
      {
        meal: "BBQ გამოყვანილი ღორის სენდვიჩი",
        ingredients: "გამოწურული ღორის ხორცი, მწვადის სოუსი, კოლესლა და ფუნთუშა",
        price: "15₾",
      },
    ],
    ვახშამი: [
      // { img: manucardimg1 },
      {
        meal: "შემწვარი ორაგული ლიმონ-კამა სოუსით",
        ingredients: "ორაგულის ფილე, ლიმონი, კამა, ზეითუნის ზეთი, ნიორი, მარილი და პილპილი.",
        price: "25₾",
      },
      {
        meal: "ძროხის სტროგანოვი",
        ingredients:
          "საქონლის ფილე, სოკო, ხახვი, ნიორი, არაჟანი, ძროხის ბულიონი და კვერცხის ლაფშა.",
        price: "28₾",
      },
      {
        meal: "ვეგეტარიანული ლაზანია",
        ingredients: "ლაზანიას ნუდლები, მოცარელას ყველი, მარინარის სოუსი, ისპანახი და სოკო.",
        price: "31₾",
      },
      {
        meal: "ტერიაკი ქათმით",
        ingredients: "ქათმის ბარძაყები, სოიოს სოუსი, თაფლი, ჯანჯაფილი, ნიორი, ბრინჯი და ბოსტნეული.",
        price: "19₾",
      },
      {
        meal: "ბადრიჯანი პარმეზანი",
        ingredients: "ბადრიჯანი, პურის მარცვლები, მარინარის სოუსი, ყველი პარმეზანი და რეჰანი.",
        price: "13₾",
      },
      {
        meal: "კრევეტები სკამპი",
        ingredients: "კრევეტები, ნიორი, თეთრი ღვინო, ლიმონი, ოხრახუში, კარაქი და ლინგვინი.",
        price: "27₾",
      },
      {
        meal: "ქათმის ფაჯიტასი",
        ingredients:
          "ქათმის მკერდი, ბულგარული წიწაკა, ხახვი, ტორტილა, არაჟანი და მექსიკური სანელებლები.",
        price: "30₾",
      },
    ],
    სტარტერები: [
      // { img: manucardimg1 },
      {
        meal: "კაპრეზის სალათი",
        ingredients:
          "ახალი პომიდორი, მოცარელას ყველი, რეჰანი, ბალზამის მინანქარი, ზეითუნის ზეთი, მარილი და პილპილი.",
        price: "8₾",
      },
      {
        meal: "ისპანახი და არტიშოკის დიპი",
        ingredients:
          "ისპანახი, არტიშოკი, ნაღების ყველი, არაჟანი, მაიონეზი, ნიორი და ყველი პარმეზანი.",
        price: "15₾",
      },
      {
        meal: "ბრუსკეტა",
        ingredients: "პომიდორი, ნიორი, რეჰანი, ზეითუნის ზეთი, ბალზამიანი ძმარი და ბაგეტის ნაჭრები.",
        price: "13₾",
      },
      {
        meal: "ჩაყრილი სოკო",
        ingredients: "სოკო, ნაღების ყველი, პურის მარცვლები, ნიორი, ოხრახუში და ყველი პარმეზანი.",
        price: "15₾",
      },
      {
        meal: "კრევეტების კოქტეილი",
        ingredients: "კრევეტები, კოქტეილის სოუსი, ლიმონის ნაჭრები და ოხრახუში დეკორაციისთვის.",
        price: "18₾",
      },
      {
        meal: "ხრაშუნა კალამარი",
        ingredients: "კალამარის რგოლები, ფქვილი, სიმინდის ფქვილი, სანელებლები და მარინარას სოუსი.",
        price: "18₾",
      },
      {
        meal: "ქათამის სტრიპსები",
        ingredients: "ქათმის შამფურები, არაქისის სოუსი, სოიოს სოუსი, ჯანჯაფილი და ნიორი.",
        price: "16₾",
      },
    ],
    სასმელი: [
      // { img: manucardimg1 },
      {
        meal: "კლასიკური მოხიტო",
        ingredients:
          "თეთრი რომი, ახალი ლაიმის წვენი, პიტნის ფოთლები, მარტივი სიროფი და სოდა წყალი.",
        price: "8₾",
      },
      {
        meal: "მანგო ლასი",
        ingredients: "მანგო, იოგურტი, რძე, შაქარი და მწიკვი კარდამონი.",
        price: "5₾",
      },
      {
        meal: "მოკა ლატე",
        ingredients: "მაჩას ფხვნილი, რძე, ყინული და დამატკბობელი (სურვილისამებრ).",
        price: "5₾",
      },
      {
        meal: "ღვთისმშობელი პინა კოლადა",
        ingredients: "ანანასის წვენი, ქოქოსის კრემი, დაქუცმაცებული ყინული და ანანასის გარნირი.",
        price: "10₾",
      },
      {
        meal: "ესპრესო მარტინი",
        ingredients: "არაყი, ყავის ლიქიორი, ახლად მოხარშული ესპრესო და მარტივი სიროფი.",
        price: "15₾",
      },
      {
        meal: "ახლად გამოწურული ფორთოხლის წვენი",
        ingredients: "ფორთოხალი.",
        price: "3₾",
      },
      {
        meal: "კიტრის და პიტნის გამაგრილებელი",
        ingredients: "კიტრი, პიტნის ფოთლები, ლაიმის წვენი, მარტივი სიროფი და სოდა წყალი.",
        price: "9₾",
      },
    ],
  };
  const getCardsForManu = () => {
    return ManuCard[activeManu] || [];
  };
  const getImagesCard = () => {
    return ImagesCard[activeManu] || [];
  };
  return (
    <ManuWrapper>
      <ManuContainer>
        <Wrapper>
          <h2>სპეციალური შეთავაზებები</h2>
          <h1>შეამოწმეთ ჩვენი მენიუ</h1>
          <p>
            დემორალიზებული მომენტის სიამოვნების ხიბლით ისე დაბრმავებული, გარდა რაიმე უპირატესობისა.
          </p>
        </Wrapper>{" "}
        <ManuSider>
          <Header>
            {Object.keys(ManuCard).map((manu: string, index: number) => (
              <HeaderItem
                key={index}
                active={activeManu === manu}
                onClick={() => handleHeaderClick(manu)}
              >
                {manu}
              </HeaderItem>
            ))}
          </Header>
          <Div>
            <Images>
              {getImagesCard().map((card: { img: string }, index: number) => (
                <ManuImages key={`${activeManu}-${index}`} img={card.img} />
              ))}
            </Images>
            <Dishes>
              {getCardsForManu().map(
                (card: { meal: string; ingredients: string; price: string }, index: number) => (
                  <ManuCards
                    key={`${activeManu}-${index}`} // Using a unique key
                    // img={card.img}
                    meal={card.meal}
                    ingredients={card.ingredients}
                    price={card.price}
                  />
                )
              )}
            </Dishes>
          </Div>
        </ManuSider>
      </ManuContainer>
    </ManuWrapper>
  );
};
export default Manus;

const ManuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 100px;
  @media (max-width: 795px) {
    padding: 8px 50px;
  }
`;

const ManuContainer = styled.div`
  /* flex-direction: column; */
`;

const ManuSider = styled.div`
  @media (max-width: 1400px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media (max-width: 680px) {
    flex-direction: column;
  }
`;
const Div = styled.div`
  display: flex;
  align-items: top;
  justify-content: space-around;
  margin-top: 20px;
`;
const Images = styled.div`
  @media (max-width: 1400px) {
    display: none;
  }
`;
const Dishes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
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

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 1400px) {
    flex-direction: column;
    margin-right: 25px;
  }
  @media (max-width: 680px) {
    flex-direction: row;
  }
  @media (max-width: 500px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    text-align: center;
  }
`;

const HeaderItem = styled.p<HeaderItemProps>`
  width: 300px;
  height: 88px;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border-right: 1px solid ${defaultTheme.colors.blue};
  color: ${(props) => (props.active ? defaultTheme.colors.floralwhite : defaultTheme.colors.red)};
  cursor: pointer;
  &:last-child {
    border-right: none;
  }
  ${(props) =>
    props.active
      ? `
        background-color:${defaultTheme.colors.red};
        
      `
      : ""};

  @media (max-width: 1400px) {
    border: none;
    /* border-top: 1px solid ${defaultTheme.colors.blue}; */
    border-bottom: 1px solid ${defaultTheme.colors.blue};
    margin: auto 0;
  }
  @media (max-width: 1200px) {
    width: 150px;
  }
  @media (max-width: 500px) {
    width: 120px;
    font-size: 20px;
  }
  @media (max-width: 450px) {
    width: 115px;
    font-size: 20px;
    padding: 0 10px;
  }
`;
