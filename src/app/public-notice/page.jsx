import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { title } from "process";
export default function PublicNotice() {
  const metaData = {
    title:"Public Notice Printing and Mailing",
    description:"We offer fast, high-quality printing and mailing services for public hearings and outreaches, including blank, stamped, or addressed envelopes as needed. Our services accommodate orders of any size with efficiency and precision.",
    listLeft:[
      "Public Hearings",
      "Public Outreaches",
      "Above Ground Facility (L.A. City)",
      "Neighborhood Meetings"
    ],
    listRight:[
      "First Class Mailing",
      "Standard Mailing",
      "Bulk Mailing",
      "Certified Mailing",
      "Registered Mailing",
      "In-Person",
      "Postmarked"
    ]
  }
  const contentData1 = [{
    title:'Certified Public Notice Lists',
    description:'We ensure the accuracy of public notices by providing certified affidavits for every list used in our printing and mailing services. These affidavits confirm that the data is up-to-date, sourced from the latest county assessor’s records, ensuring the reliability of all notices.'
  },{
    title:"Verification of Occupant and Tenant Lists",
    description:"In addition to public notice lists, we also verify occupant and tenant data, ensuring accuracy for all involved parties. This extra diligence is crucial for meeting the strict requirements of city and county agencies."
  },{
    title:"Trusted Public Notice Solutions",
    description:"At L.A. Mapping Service, we offer certified, reliable, and compliant public notice solutions, ensuring that all notices meet legal and regulatory standards with precision and verification."
  }]
  // const contentData2 = [{
  //   title:'',
  //   description:'Our commitment to delivering user-friendly, accurate maps makes them not just tools for analysis but also instruments for strategic decision-making. Choose Radius Map 4 Less, Inc. for Radius Maps that blend precision with practicality, catering to a broad spectrum of professional mapping needs.'
  // }]
  return (
    <>
    <Breadcrumb
      pageName="Radius Mapping"
      description=""
    />
    <AboutSectionTwo contentData={contentData1}/>
    <AboutSectionOne metaData={metaData} list={true}/>

    {/* <AboutSectionTwo contentData={contentData2}/> */}
  </>
  );
}