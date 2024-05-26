import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import FooterChild from "./components/FooterChild";

function Footer() {
  return (
    <div className="outermostSectionContainer box-border w-full xl1:w-[1440px] mt-16">
      <div className="sectionContainer box-border py-16 w-10/12 mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div className="leftDiv box-border w-2/3 md:w-1/4 mx-auto text-footerChild flex flex-col gap-4">
          <img
            src="/images/logo.svg"
            alt=""
            className="logo box-border block w-full"
          />
          <p className="para box-border w-full font-light text-base text-left">
            Empowering communities through seamless access to professional
            services and fund raising opportunities.
          </p>
          <div className="detailAddress box-border flex justify-start gap-3 items-start">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="box-border relative top-2"
            />
            <p className="detail box-border font-medium text-base">
              70 Washington Square South, New York, NY 100012, US
            </p>
          </div>

          <div className="detailContact box-border -mt-6 flex justify-start gap-2 items-start">
            <FontAwesomeIcon
              icon={faPhone}
              className="box-border relative top-2"
            />
            <p className="detail  box-border font-medium text-base">
              +91-9876543214
            </p>
          </div>

          <div className="detailAddress box-border -mt-6 flex justify-start gap-2 items-start">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="box-border relative top-1"
            />
            <p className="detail box-border font-medium text-base">
              info@companyname.com
            </p>
          </div>
          <div className="allIcons box-border w-full flex justify-between items-center text-appGreen text-3xl">
            <FontAwesomeIcon
              icon={faFacebookF}
              className="cursor-pointer hover:text-footerColor hover:scale-125 hover:ring hover:ring-offset-4 hover:ring-2 hover:ring-appGreen"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="cursor-pointer hover:text-footerColor hover:scale-125 hover:ring hover:ring-offset-4 hover:ring-2 hover:ring-appGreen"
            />
            <FontAwesomeIcon
              icon={faLinkedin}
              className="cursor-pointer hover:text-footerColor hover:scale-125 hover:ring hover:ring-offset-4 hover:ring-2 hover:ring-appGreen"
            />
            <FontAwesomeIcon
              icon={faTwitter}
              className="cursor-pointer hover:text-footerColor hover:scale-125 hover:ring hover:ring-offset-4 hover:ring-2 hover:ring-appGreen"
            />
            <FontAwesomeIcon
              icon={faYoutube}
              className="cursor-pointer hover:text-footerColor hover:scale-125 hover:ring hover:ring-offset-4 hover:ring-2 hover:ring-appGreen"
            />
          </div>
        </div>
        <div className="rightDiv box-border  w-11/12 md:w-3/5 mx-auto flex flex-col gap-12">
          <div className="topDiv box-border w-[200px] px-3 border border-orange-300	rounded flex justify-between items-center cursor-pointer hover:bg-gradient-to-r from-pink-900 to-purple-900 hover:ring-1 hover:ring-offset-4 hover:ring-appGreen">
            <p className="para box-border font-semibold relative top-2 text-xl text-appGreen">
              Locations
            </p>
            <FontAwesomeIcon
              icon={faAngleDown}
              className="box-border w-5 h-5 text-appGreen"
            />
          </div>
          <div className="footerChildContainer box-border w-full flex justify-between items-start">
            <FooterChild
              heading="Quick Links"
              link1="About Us"
              link2="Investor Relations"
              link3="We're hiring"
              link4="Customer Care"
              link5="Free Listing"
              link6="What's New"
              link7="Report A Bug"
              link8="B2B Sitemap"
            />

            <FooterChild
              heading="Popular Categories"
              link1="Doctor's"
              link2="Engineer's"
              link3="CA's"
              link4="Advocates"
              link5="Teachers"
              link6="Labourers"
              link7="Officers"
              link8="Govt. Officials"
            />

            <FooterChild
              heading="Popular Cities"
              link1="New Delhi"
              link2="Pune"
              link3="Surat"
              link4="Mumbai"
              link5="Panaji"
              link6="Banglore"
              link7="Chandigarh"
              link8="Srinagar"
            />
          </div>
          {/**/}
        </div>
      </div>
    </div>
  );
}

export default Footer;
