import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { title } from "process";


const AboutPage = () => {
  const metaData = {
    title:"ABOUT RADIUS MAP 4 LESS, INC",
    description:"With over 20 years of experience, Radius Map 4 Less, Inc. provides a Full- Service Notification Services, including Radius Maps, Address List, Direct Mailing Services, Notification Lists, Professional Notary and Certification services and limited drafting services.",
    listRight:[],
    listLeft:[]
  }
  const contentData = [
    {
title:"Family-owned and operated business",
    description:"A Mapping Service, Inc. is a family-owned and operated business, operating in the Greater Los Angeles area since 2002. Owner, James Chang began his career as a web developer in 1987 working in Los Angeles. After perfecting his trade, James decided to open Radius Map 4 Less, Inc., taking his knowledge, experience and love of business to a small office in the city of San Gabriel, CA."
    }
  ]
    
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description=""
      />
      <AboutSectionOne metaData={metaData} list={false}/>
      <AboutSectionTwo contentData={contentData}/>
    </>
  );
};

export default AboutPage;
