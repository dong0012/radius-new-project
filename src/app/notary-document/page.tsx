import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Descriptions } from "antd";
import { title } from "process";
export default function NotaryDocument() {
  const metaData = {
    title:"Accurate Documentation and Certification Services",
    description:"At L.A. Mapping Service, Inc., we ensure the accuracy of all documents with detailed affidavits based on the latest county assessor data. Our rigorous certification process guarantees reliable information, and we offer notary services for additional authentication needs. Perfect for clients requiring official, verified documentation.",
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
    title:'Notary and Document Certification Services',
    description:'We offer professional notary and document certification services to meet various legal and official needs. Our experienced team ensures that your documents are properly authenticated and legally recognized.'
  },{
    title:"Document Verification and Authentication",
    description:"Specializing in document certification, we meticulously review and verify each document for authenticity and accuracy, ensuring compliance for property, legal, and other formal purposes."
  },{
    title:"Reliable Notarial Services",
    description:"Whether it's a simple notarization or full document certification, we provide fast, dependable, and professional services with attention to detail and legal compliance."
  }]
  const contentData2 = [{
    title:'Meticulous Document Verification and Certification',
    description:'Our Ownership Maps integrate property data with geographical context, delivering a clear, comprehensive view to support strategic planning. Each map and list is crafted with the utmost accuracy and is available in convenient formats including digital files (Excel, PDF) or physical media like USB drives and CDs. Count on us for thorough, dependable property analytics to support informed decision-making and project success.'
  }]
  return (
    <>
    <Breadcrumb
      pageName="Radius Mapping"
      description=""
    />
    <AboutSectionTwo contentData={contentData1}/>
    <AboutSectionOne metaData={metaData} list={false}/>
    {/* <AboutSectionTwo contentData={contentData2}/> */}
  </>
  );
}