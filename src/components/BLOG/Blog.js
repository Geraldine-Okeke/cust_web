import Nav from "../Home/Nav"
import Section1 from "../MANDATE/Section1"
import Section2 from "./Section2"
import Section5 from "../Home/Section5"
import Footer from "../Home/Footer"
import bg from './Images/bg.png'
export default function Blog(){
  return(
    <>
      <Nav/>
      <Section1 
        bg = {bg}
        title="BLOG"
        details={`Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
        purus lectus malesuada libero, sit amet commodo magna eros quis urna.
        Nunc viverra imperdiet enim. Fusce est.`}
        floatDirection= 'right'
      />
      <Section2/>
      <Section5
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