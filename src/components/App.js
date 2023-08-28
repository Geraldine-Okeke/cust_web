import Home from "./Home/Home";
import './index.css'
import Mandate from "./MANDATE/Mandate";
import Programs from "./Programs/Programs"
import Tribe from "./TRIBE/Tribe";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from "../Scroll_top";
import Contact from "./CONTACT/Contact";
import GetInvolved from "./GET_INVOLVED/GetInvolved";
import Sponsor from "./GET_INVOLVED/Sponsor";
import Mentor from "./GET_INVOLVED/Mentor";
import Volunteer from "./GET_INVOLVED/Volunteer";
import News from "./NEWS/News";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Blog from "./BLOG/Blog";
function App() {
  return (
    
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MANDATE/Mandate" element={<Mandate />} />
        <Route path="/Programs/Programs" element={<Programs/>}/>
        <Route path="/TRIBE/Tribe" element={<Tribe/>}/>
        <Route path="/CONTACT/Contact" element={<Contact/>}/>
        <Route path="/GET_INVOLVED/GetInvolved"element={<GetInvolved/>}/>
        <Route path="/GET_INVOLVED/Volunteer" element={<Volunteer/>}/>
        <Route path="/GET_INVOLVED/Sponsor" element={<Sponsor/>}/>
        <Route path="/GET_INVOLVED/Mentor" element={<Mentor/>}/>
        <Route path="/NEWS/News" element={<News/>} />
        <Route path="/BLOG/Blog" element={<Blog/>} />
      </Routes>
    </Router>
    
  );
}

export default App;
