import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import pic from '../../../public/images/radiusmapping/71d5232e-e4e6-43e0-8f50-fe4b1493b566.png'
import picTwo from '../../../public/images/radiusmapping/81bb14ea-f47b-4999-a172-5c2253d39a0b.png'
import picThree from '../../../public/images/radiusmapping/WechatIMG573.png'
export default function RadiusMapping() {
  const metaData = {
    title:"High-Quality Radius Maps for Diverse Applications",
    description:"Radius Map 4 Less, Inc. offers High-Quality Radius Maps, a vital tool for a multitude of applications spanning from urban development to environmental analysis.",
    listLeft:[],
    listRight:[],
    pic:pic
  }
  const contentData1 = [{
    title:'',
    description:'These maps are invaluable for a variety of stakeholders, including real estate developers who rely on them for site selection and land development, urban planners for city development projects, and governmental agencies for regulatory and planning purposes. Beyond Radius Maps, our portfolio includes Vicinity Maps and Land Use Maps, essential for comprehensive area planning and zoning considerations.'
  }]
  const contentData2 = [{
    title:'',
    description:'Our commitment to delivering user-friendly, accurate maps makes them not just tools for analysis but also instruments for strategic decision-making. Choose Radius Map 4 Less, Inc. for Radius Maps that blend precision with practicality, catering to a broad spectrum of professional mapping needs.'
  }]
  return (
    <>
    <Breadcrumb
      pageName="Radius Mapping"
      description=""
    />
    <AboutSectionOne metaData={metaData} list={false}/>
    <AboutSectionTwo contentData={contentData1} pic={picTwo}/>
    <AboutSectionTwo contentData={contentData2} pic={picThree}/>
  </>
  );
}
