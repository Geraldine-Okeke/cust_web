import Nav from "../Home/Nav"
import Section1 from "../MANDATE/Section1"
import ConBg from './Images/contact.jpg'
import Section2 from "./Section2"
import "./Contact.css"
import Section3 from "./Section3"
import Section4 from "../Home/Section5"
import Footer from "../Home/Footer"
export default function Contact(){
  return (
    <>
    <Nav/>
    <Section1
      bg = {ConBg}
      title="REACH US"
      details={`Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
      purus lectus malesuada libero, sit amet commodo magna eros quis urna.
      Nunc viverra imperdiet enim. Fusce est.`}
    />
    <Section2/>
    <Section3/>
    <Section4
      link = '/GET_INVOLVED/Get_involved'
      btn="GET INVOLVED"
      paragraph="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa.
      Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero,
       sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est."
    />
    <Footer/>
    </>
  )
}