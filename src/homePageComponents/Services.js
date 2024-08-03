import React, { useEffect, useState } from "react";
import style from "../styles/Services.module.css";
import ServicesCard from "./ServicesCard";
import ServiceCard2 from "./ServiceCard2";
import ServiceCard2A from "./ServiceCard2A";
import ServicesCard3 from "./ServicesCard3";
import CarouselComp2 from "./CarouselComp2";
import SearchBar from "../commonComponents/SearchBar";
import { getAllCategories } from "../axios/homepageCategories/HomepageCategoriesFunctions";

const imageMap = {
  Doctors: "/images/services/doc.svg",
  Engineers: "/images/services/engg.svg",
  "CA's": "/images/services/ca.png",
  Advocates: "/images/services/adv.svg",
  Teachers: "/images/services/teacher.svg",
  Labours: "/images/services/lab.svg",
  Officers: "/images/services/off.svg",
  "Govt. Officers": "/images/services/govt off.svg",
};

const getBackgroundColor = (categoryName, categories) => {
  const category = categories.find((cat) => cat.categoryName === categoryName);
  return category ? category.backgroundColor : "transparent";
};

function Services() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories().then((data) => setCategories(data));
  }, []);

  const categoryMap = categories.reduce((acc, category) => {
    acc[category.categoryName] = category._id;
    return acc;
  }, {});

  return (
    <div className={`${style.outermostSectionContainer}`}>
      <div className={`${style.sectionContainer}`}>
        <SearchBar placeholderProp="Search doctors, advocates, teachers and many more....." />
        <div className={style.midDiv}>
          <div className={style.leftMid}>
            <CarouselComp2 />
          </div>
          <div className={style.rightMid}>
            <div className={style.topRight}>
              {Object.keys(categoryMap)
                .slice(0, 4)
                .map((categoryName) => (
                  <ServicesCard
                    key={categoryName}
                    img={imageMap[categoryName]}
                    title={categoryName}
                    categoryId={categoryMap[categoryName]}
                    bcg={getBackgroundColor(categoryName, categories)}
                  />
                ))}
            </div>
            <div className={style.btmRight}>
              {Object.keys(categoryMap)
                .slice(4)
                .map((categoryName) => (
                  <ServicesCard
                    key={categoryName}
                    img={imageMap[categoryName]}
                    title={categoryName}
                    categoryId={categoryMap[categoryName]}
                    bcg={getBackgroundColor(categoryName, categories)}
                  />
                ))}
            </div>
          </div>
        </div>
        <div className={style.btmDiv}>
          <ServiceCard2
            title1="START FUNDRAISING"
            img="/images/services/fund.png"
            bcg="rgba(0, 134, 110, 1)"
          />
          <ServiceCard2A
            title1="DONATE NOW"
            img="/images/services/donate.png"
            bcg="rgba(36, 54, 94, 1)"
          />
          <ServicesCard3 />
        </div>
      </div>
    </div>
  );
}


export default Services;
