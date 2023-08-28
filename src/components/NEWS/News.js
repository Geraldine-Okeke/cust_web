import Nav from "../Home/Nav"
import Section1 from "../MANDATE/Section1"
import bg from './Images/newsBg.png'
import Section2 from "./Section2"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Section3 from "./Section3";
import Section4 from '../Home/Section5'
import Footer from "../Home/Footer";
export default function News(){
  return(
    <>
    <Nav/>
    <Section1
      bg={bg}
      title= "NEWS AND EVENTS"
      details = {`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa.
                    Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo
                    magna eros quis urna. Nunc viverra imperdiet enim. Fusce est.`}
      floatDirection= 'right'
    />
    <Section2/>
    <Section3/>
    <Section4
        link = '/GET_INVOLVED/GetInvolved'
        btn= "GET INVOLVED"
        paragraph="consectetuer adipiscing elit. Maecenas porttitor congue massa.
        Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero,
        sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est."
      />
      <Footer
          
      />
    </>
  )
}