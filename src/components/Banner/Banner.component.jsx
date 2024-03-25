import { useLocation } from 'react-router-dom';

import './Banner.styles.scss'

const Banner = () => {
  const location = useLocation();

  let bannerText = 'Welcome to the cat app!';

  if (location.pathname === '/'){
    bannerText = "Click the button. Get a cat!";
  } else if (location.pathname === '/info'){
    bannerText = "Select a cat for more info!";
  } else if (location.pathname === '/new-pet'){
    bannerText = "Choose the best cat for you!";
  }
  return (
    <div>
      <h1>{bannerText}</h1>
    </div>
  );
};

export default Banner;
