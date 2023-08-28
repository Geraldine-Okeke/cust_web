import Nav from "../Home/Nav"
import Section1 from "../MANDATE/Section1"
import bg from './Images/tribe_bg.jpg'
import Section2 from "../Programs/Section3"
import Section3 from "../Home/Section5"
import Footer from "../Home/Footer"
import team_details from './Teams_details'
export default function Tribe(){
  return(
    <>
      <Nav/>
      <Section1
        bg = {bg}
        title = "OUR TRIBE"
        details = {`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa.
                    Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo
                    magna eros quis urna. Nunc viverra imperdiet enim. Fusce est.`}
      />
      <Section2
        backgroundC= "#00586B"
        heading= "Our Team"
        programs={team_details}
        textColor="white"
      />
      <Section3
        link = '/GET_INVOLVED/GetInvolved'
        btn="GET INVOLVED"
        paragraph="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa.
        Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero,
        sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est."
      />
      <Footer/>
    </>
    
  )
}