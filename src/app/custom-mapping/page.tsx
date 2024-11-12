import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import pic from '../../../public/images/custommapping/WechatIMG554.jpg'

const CustomMapping = () => {

  const metaData = {
    title:"Advanced Radius and Custom Mapping Solutions",
    description:"We provide accurate maps of any size radius. (100 ft radius (100'), 300 ft radius (300'), 500 ft radius (500'), 1000 ft radius (1000'), etc.)",
    listLeft:['Radius Maps',' Assessor’s Parcel Maps','Ownership Maps','Land Use Maps','Vicinity Maps'],
    listRight:['Zoning Maps','Location Maps','Adjacent Owners Maps','Blank Maps','Assessor’s Parcel Maps'],
    pic:pic
  }

  return (
    <>
      <Breadcrumb
        pageName="Advanced Radius and Custom Mapping Solutions"
        description="All of our radius maps are created to the highest quality and scale and accuracy."
      />
      <AboutSectionOne metaData={metaData} list={true}/>
    </>
  );
};

export default CustomMapping;
