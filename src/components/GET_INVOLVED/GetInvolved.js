import Nav from "../Home/Nav"
import Section1 from "../MANDATE/Section1"
import GetBg from './images/get_involved_bg.png'
import Section2 from "./Section2"
import Section3 from "./Section3"
import Section4 from "../Home/Section5"
import Footer from "../Home/Footer"
import './Get_involved.css'
export default function GetInvolved(){
  return(
    <>
      <Nav/>
      <Section1
        bg = {GetBg}
        title="GET INVOLVED"
        details={`Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
        purus lectus malesuada libero, sit amet commodo magna eros quis urna.
        Nunc viverra imperdiet enim. Fusce est.`}
      />
      <Section2/>
      <Section3/>
      <Section4
        btn="MENTOR"
        link = '/GET_INVOLVED/Mentor'
        paragraph="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa.
        Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero,
         sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est."
      />
      <Footer/>
    </>
  )
}