import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import pic1 from '../../../public/images/property/WechatIMG573.jpeg'
import pic2 from '../../../public/images/property/WechatIMG547.jpg'
import pic3 from '../../../public/images/property/images.jpeg'
export default function PropertyOwnership() {
  const metaData = {
    title:"Precision-Generated Property and Tenant Lists",
    description:"",
    listLeft:["Property Ownership Lists","Occupant Lists","Tenant Lists","List of residences","List of schools, parks, hospitals, churches, etc. List of alcohol establishments","List of Alcohol Establishments",'Alcoholic Beverage Control (ABC)',"AQMD",'more'],
    listRight:[" Address Labels (gummed labels)","Excel","Word","Word Perfect","PDF","Affixed to Envelopes","AQMD","more"],
    pic:pic1
  }
  const contentData1 = [{
    title:'Property Mapping and Listing Services',
    description:'At L.A. Mapping Service, Inc., we create customized property lists and maps for real estate, legal, and urban planning needs, including ownership, tenant, and occupant lists.'
  },{
    title:"Accurate, Up-to-Date Data",
    description:"We ensure our data is precise and current, offering Ownership Maps that combine property and geographical information."
  },{
    title:"Flexible Formats for Convenience",
    description:"Our services are available in digital (Excel, PDF) and physical formats (CDs, USB drives) for client convenience."
  }]
  const contentData2 = [{
    title:'Customized Ownership Mapping and Data Integration Services',
    description:'Our Ownership Maps integrate property data with geographical context, delivering a clear, comprehensive view to support strategic planning. Each map and list is crafted with the utmost accuracy and is available in convenient formats including digital files (Excel, PDF) or physical media like USB drives and CDs. Count on us for thorough, dependable property analytics to support informed decision-making and project success.'
  }]
  return (
    <>
    <Breadcrumb
      pageName="Property Ownership and Occupant List"
      description=""
    />
    <AboutSectionTwo contentData={contentData1} pic={pic2}/>
    <AboutSectionOne metaData={metaData} list={true}/>
    <AboutSectionTwo contentData={contentData2} pic={pic3}/>
  </>
  );
}
