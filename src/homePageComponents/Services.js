import React, { useEffect, useState } from "react";
import style from "../styles/Services.module.css";
import ServicesCard from "./ServicesCard";
import ServiceCard2 from "./ServiceCard2";
import ServiceCard2A from "./ServiceCard2A";
import ServicesCard3 from "./ServicesCard3";
import CarouselComp2 from "./CarouselComp2";
import SearchBar from "../commonComponents/SearchBar";
import { getAllCategories } from "../axios/homepageCategories/HomepageCategoriesFunctions";

function Services() {
  const [categories, setCategories] = useState([]);
  const allImages = [
    "doctor2.png",
    "engg2.png",
    "ca2.png",
    "adv2.png",
    "teacher2.png",
    "lab2.png",
    "off2.png",
    "govt off2.png",
  ];

  useEffect(() => {
    getAllCategories().then((data) => setCategories(data));
  }, []);

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
              {categories.slice(0, 4).map((category, index) => (
                <ServicesCard
                  key={category._id}
                  img={`/images/services/${allImages[index]}`}
                  title={category.categoryName}
                  categoryId={category._id}
                  backgroundColor={category.backgroundColor}
                />
              ))}
            </div>
            <div className={style.btmRight}>
              {categories.slice(4).map((category, index) => (
                <ServicesCard
                  key={category._id}
                  img={`/images/services/${allImages[index + 4]}`}
                  title={category.categoryName}
                  categoryId={category._id}
                  backgroundColor={category.backgroundColor}
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
