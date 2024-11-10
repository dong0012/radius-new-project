import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Descriptions } from "antd";
import { title } from "process";
export default function CertifiedAffidavit() {
  const metaData = {
    title:"Expert Affidavit and Notary Services",
    description:"We provide certified affidavits for all lists, confirming their accuracy and sourcing from the most current county assessor’s roll. Additionally, we verify occupant and tenant information to ensure its reliability. Notary services are available when required, especially for affidavits needing certification by city or county agencies.",
    listLeft:[],
    listRight:[]
  }
  const contentData1 = [{
    title:'Certified Affidavit Services',
    description:'We provide certified affidavits to ensure the authenticity of our lists, backed by the latest county assessor data. Each affidavit is rigorously signed and verified for accuracy and reliability.'
  },{
    title:"Notary Services for Legal Compliance",
    description:"We also offer notary services to certify and notarize affidavits as required by city and county agencies, ensuring full legal compliance.",
  },{
    title:"Trusted Certification Solutions",
    description:"L.A. Mapping Service meticulously verifies and certifies all data, making us a trusted partner for all your notarial and certification needs."
  }]
  const contentData2 = [{
    title:'Customized Ownership Mapping and Data Integration Services',
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
