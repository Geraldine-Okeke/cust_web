import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './Images/nav-image.png'
export default function Footer() {
  const location = useLocation();
  const SectionRef = useRef(null);

  const scrollToSection = () => {
    SectionRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  

  const isMandatePage = location.pathname === '/MANDATE/Mandate';
  const isContactPage = location.pathname === '/CONTACT/Contact';
  const isBlogPage = location.pathname === '/BLOG/Blog';
  const isNewsPage = location.pathname === 'NEWS/News';
  return (
    <>
      <div className="bg-custom-blue md:pl-10 text-white grid md:grid-cols-4 sm:grid-cols-2 gap-4">
        <div className="flex flex-col p-4">
          <img src={logo} alt="logo" className="w-20" />
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
            porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
          </p>
        </div>
        <div className="pt-10 p-4">
        <h2>Reach us</h2>
          <ul>
            <li>
            {isContactPage ? (
                <a href="#contact" onClick={scrollToSection}>
                  Contact Us
                </a>
              ) : (
              <Link to="/CONTACT/Contact">Contact Us</Link>
              )}
            </li>
            <li>
              {isMandatePage ? (
                <a href="#about" onClick={scrollToSection}>
                  About us
                </a>
              ) : (
                <Link to="/MANDATE/Mandate#about">About us</Link>
              )}
            </li>
          </ul>
        </div>
        <div className="pt-10 p-4">
          <h2>Programs</h2>
          <ul>
            <li>
              <Link to="/">Arts</Link>
            </li>
            <li>
              <Link to="/">SDGs</Link>
            </li>
            <li>
              <Link to="/">Entrepreneurship</Link>
            </li>
          </ul>
        </div>
        <div className="pt-10 p-4">
          <h2>Resources</h2>
          <ul>
            <li>
            {isBlogPage ? (
                <Link to="/BlOG/Blog" onClick={scrollToSection}>
                  Blog
                </Link>
              ) : (
              <Link to="/BLOG/Blog">Blog</Link>
              )}
            </li>
            <li>
              <Link to="/">Private Policy</Link>
            </li>
            <li>
            <Link
                to="/NEWS/News"
                onClick={() => {
                  if (isNewsPage) {
                    window.scrollTo(0, 0); 
                  }
                }}
              >
              News
          </Link>
            </li>
          </ul>
        </div>
      </div>
      
      <footer className='bg-custom-blue'>
        <hr/>
        <div className='flex flex-row items-center justify-center py-10'>
        <Link to="https://www.facebook.com/kindlegatefoundation" className="mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="44" height="42" viewBox="0 0 44 42" fill="none">
            <path d="M40.3333 21C40.3333 11.34 32.12 3.5 22 3.5C11.88 3.5 3.66667 11.34 3.66667 21C3.66667 29.47 9.97333 36.5225 18.3333 38.15V26.25H14.6667V21H18.3333V16.625C18.3333 13.2475 21.2117 10.5 24.75 10.5H29.3333V15.75H25.6667C24.6583 15.75 23.8333 16.5375 23.8333 17.5V21H29.3333V26.25H23.8333V38.4125C33.0917 37.5375 40.3333 30.0825 40.3333 21Z" fill="white"/>
          </svg>
        </Link>

        <Link to="https://www.instagram.com/kindlegatefoundation/?hl=en" className="mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="45" height="42" viewBox="0 0 45 42" fill="none">
            <path d="M14.625 3.5H30.375C36.375 3.5 41.25 8.05 41.25 13.65V28.35C41.25 31.0419 40.1042 33.6236 38.0648 35.5271C36.0253 37.4306 33.2592 38.5 30.375 38.5H14.625C8.625 38.5 3.75 33.95 3.75 28.35V13.65C3.75 10.9581 4.89576 8.37636 6.93521 6.47287C8.97467 4.56937 11.7408 3.5 14.625 3.5ZM14.25 7C12.4598 7 10.7429 7.66375 9.47703 8.84523C8.21116 10.0267 7.5 11.6291 7.5 13.3V28.7C7.5 32.1825 10.5187 35 14.25 35H30.75C32.5402 35 34.2571 34.3363 35.523 33.1548C36.7888 31.9733 37.5 30.3709 37.5 28.7V13.3C37.5 9.8175 34.4812 7 30.75 7H14.25ZM32.3438 9.625C32.9654 9.625 33.5615 9.85547 34.001 10.2657C34.4406 10.6759 34.6875 11.2323 34.6875 11.8125C34.6875 12.3927 34.4406 12.9491 34.001 13.3593C33.5615 13.7695 32.9654 14 32.3438 14C31.7221 14 31.126 13.7695 30.6865 13.3593C30.2469 12.9491 30 12.3927 30 11.8125C30 11.2323 30.2469 10.6759 30.6865 10.2657C31.126 9.85547 31.7221 9.625 32.3438 9.625ZM22.5 12.25C24.9864 12.25 27.371 13.1719 29.1291 14.8128C30.8873 16.4538 31.875 18.6794 31.875 21C31.875 23.3206 30.8873 25.5462 29.1291 27.1872C27.371 28.8281 24.9864 29.75 22.5 29.75C20.0136 29.75 17.629 28.8281 15.8709 27.1872C14.1127 25.5462 13.125 23.3206 13.125 21C13.125 18.6794 14.1127 16.4538 15.8709 14.8128C17.629 13.1719 20.0136 12.25 22.5 12.25ZM22.5 15.75C21.0082 15.75 19.5774 16.3031 18.5225 17.2877C17.4676 18.2723 16.875 19.6076 16.875 21C16.875 22.3924 17.4676 23.7277 18.5225 24.7123C19.5774 25.6969 21.0082 26.25 22.5 26.25C23.9918 26.25 25.4226 25.6969 26.4775 24.7123C27.5324 23.7277 28.125 22.3924 28.125 21C28.125 19.6076 27.5324 18.2723 26.4775 17.2877C25.4226 16.3031 23.9918 15.75 22.5 15.75Z" fill="white"/>
          </svg>
        </Link>
        <Link to="https://twitter.com/kindlegatecares" className="mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="44" height="42" viewBox="0 0 44 42" fill="none">
            <path d="M41.1767 10.5C39.765 11.1125 38.2433 11.515 36.6667 11.7075C38.28 10.78 39.5267 9.31 40.1133 7.5425C38.5917 8.4175 36.905 9.03 35.1267 9.38C33.6783 7.875 31.6433 7 29.3333 7C25.025 7 21.505 10.36 21.505 14.5075C21.505 15.1025 21.5783 15.68 21.7067 16.2225C15.18 15.9075 9.36833 12.915 5.5 8.3825C4.82167 9.485 4.43667 10.78 4.43667 12.145C4.43667 14.7525 5.81167 17.0625 7.93833 18.375C6.63667 18.375 5.42667 18.025 4.36333 17.5V17.5525C4.36333 21.1925 7.07667 24.2375 10.67 24.92C9.51633 25.2214 8.30517 25.2633 7.13167 25.0425C7.62961 26.5343 8.60482 27.8397 9.9202 28.7751C11.2356 29.7105 12.825 30.229 14.465 30.2575C11.685 32.3583 8.23899 33.4938 4.69333 33.4775C4.07 33.4775 3.44667 33.4425 2.82333 33.3725C6.30667 35.5075 10.45 36.75 14.8867 36.75C29.3333 36.75 37.2717 25.305 37.2717 15.3825C37.2717 15.05 37.2717 14.735 37.2533 14.4025C38.7933 13.3525 40.1133 12.0225 41.1767 10.5Z" fill="white"/>
          </svg>
        </Link>

        <Link to="/page" className="mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="41" height="39" viewBox="0 0 41 39" fill="none">
            <g clipPath="url(#clip0_244_434)">
              <path d="M20.6307 4.87256H20.8588C22.9651 4.87987 33.6379 4.953 36.5156 5.68912C37.3856 5.91378 38.1783 6.35169 38.8146 6.95908C39.4509 7.56647 39.9085 8.32207 40.1416 9.15037C40.4004 10.0766 40.5823 11.3027 40.7053 12.5677L40.7309 12.8212L40.7873 13.455L40.8078 13.7085C40.9744 15.9364 40.9949 18.0229 40.9974 18.4787V18.6615C40.9949 19.1344 40.9718 21.3622 40.7873 23.6827L40.7668 23.9387L40.7437 24.1922C40.6156 25.5864 40.426 26.9709 40.1416 27.9898C39.9092 28.8184 39.4518 29.5744 38.8154 30.1819C38.179 30.7894 37.3859 31.2271 36.5156 31.4511C33.5431 32.2116 22.2451 32.2652 20.6794 32.2676H20.3155C19.5237 32.2676 16.2488 32.253 12.8151 32.1409L12.3794 32.1262L12.1565 32.1165L11.7183 32.0994L11.2801 32.0824C8.43575 31.9629 5.72719 31.7704 4.47925 31.4486C3.60926 31.2248 2.81635 30.7875 2.17998 30.1805C1.54361 29.5734 1.08611 28.818 0.853312 27.9898C0.568875 26.9734 0.37925 25.5864 0.251125 24.1922L0.230625 23.9362L0.210125 23.6827C0.0836595 22.0311 0.0135809 20.376 0 18.72L0 18.4202C0.005125 17.8961 0.025625 16.0851 0.164 14.0863L0.181938 13.8352L0.189625 13.7085L0.210125 13.455L0.2665 12.8212L0.292125 12.5677C0.415125 11.3027 0.597062 10.0742 0.855875 9.15037C1.08828 8.32174 1.5456 7.56578 2.182 6.95828C2.8184 6.35079 3.61151 5.91311 4.48181 5.68912C5.72975 5.37225 8.43831 5.17725 11.2827 5.05537L11.7183 5.03831L12.1591 5.02368L12.3794 5.01637L12.8176 4.99931C15.2564 4.92466 17.6961 4.88322 20.1361 4.875H20.6307V4.87256ZM16.4 12.6969V24.4408L27.0523 18.5713L16.4 12.6969Z" fill="white"/>
            </g>
            <defs>
              <clipPath id="clip0_244_434">
                <rect width="41" height="39" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </Link>

       </div>
      </footer>

    </>
  )
}