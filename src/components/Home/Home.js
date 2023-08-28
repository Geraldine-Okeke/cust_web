import './Home.css'
import Nav from './Nav'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Footer from './Footer'
import Programs from './Programs'
export default function Home(){
  return(
    <>
    <Nav/>
    <Section1/>
    <Section2/>
    <Section3/>
    <Section4
      programs = {Programs}
      title = "FEATURED PROGRAMS"
      showButton={true}
    />
    <Section5
      paragraph="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa.
      Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero,
       sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est."
       btn= "VOLUNTEER"
       link = '/GET_INVOLVED/Volunteer'
    />
    <Footer
      
    />
    </>
  )
}