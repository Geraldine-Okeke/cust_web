import Nav from "../Home/Nav";
import Section1 from "../MANDATE/Section1";
import Prog_bg from './images/Programs_bg.png'
import Section2 from "../Home/Section4";
import feat_prog from './Featured_pro'
import Section3 from "./Section3";
import progDetails from './Prog_details'
import Section5 from "../Home/Section5";
import Footer from "../Home/Footer";
export default function Programs(){
  return(
    <>
      <Nav/>
      <Section1
        bg = {Prog_bg}
        title = "PROGRAMS"
        details = {`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa.
                    Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo
                    magna eros quis urna. Nunc viverra imperdiet enim. Fusce est.`}
      />
      <Section2
        programs={feat_prog}
        title = "Programs and Initiatives"
        showButton={false}
      />
      <Section3
        heading="What We Do"
        programs={progDetails}
        backgroundC= "white"
        textColor= "black"
      
      />
      <Section5
        link = '/GET_INVOLVED/GetInvolved'
        btn = "GET INVOLVED"
        paragraph="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa.
        Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero,
        sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est."
      />
      <Footer/>
    </>
  )
}