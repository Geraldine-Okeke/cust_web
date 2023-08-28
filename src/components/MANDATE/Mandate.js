import './Mandate.css'
import Section1 from './Section1'
import Nav from '../Home/Nav'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from '../Home/Section5'
import Footer from '../Home/Footer'
import manBg from './images/Mandate_bg.png'
export default function Mandate(){
  console.log('rendered')
  return (
    
    <>
      <Nav/>    
      <Section1 
        bg = {manBg}
        title="OUR MANDATE"
        details={`Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
        purus lectus malesuada libero, sit amet commodo magna eros quis urna.
        Nunc viverra imperdiet enim. Fusce est.`}
      />
      <Section2/>
      <Section3/>
      <Section4/>
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