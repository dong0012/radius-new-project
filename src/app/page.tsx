import AboutSectionOne from "@/components/About/AboutSectionOne";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Descriptions, List } from "antd";
import { Metadata } from "next";
import { title } from "process";

// export const metadata: Metadata = {
//   title: "Free Next.js Template for Startup and SaaS",
//   description: "This is Home for Startup Nextjs Template",
//   // other metadata
// };

export default function Home() {
  const metaData1 = {
    title:'We prepare maps of all types, including:',
    descriptions:'',
    listLeft:['Radius Maps',' Assessor’s Parcel Maps','Ownership Maps','Land Use Maps','Vicinity Maps'],
    listRight:['Zoning Maps','Location Maps','Adjacent Owners Maps','Blank Maps','Assessor’s Parcel Maps']
  }
  const metaData2:any = {
    title:"We provide services to a variety of industries, including the following:",
    descriptions:"",
    listLeft:['New Business','Permit Expediters','Engineers','Land Surveyors'],
    listRight:['Public Works','Government Agencies','Alcohol Beverage Control']
  }
  return (
    <>
      <ScrollUp />
      <Hero />
      <AboutSectionOne metaData={metaData1} list={true}/>
      <Features />
      <AboutSectionOne metaData={metaData2} list={true}/>
    </>
  );
}
