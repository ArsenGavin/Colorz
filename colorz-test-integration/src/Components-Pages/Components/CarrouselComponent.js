import '../../Styles/Carrousel.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Slider1 from '../../assests/img-video/computer/Slider1.png';
import Slider2 from '../../assests/img-video/computer/Slider2.png';
import Slider3 from '../../assests/img-video/computer/Slider3.png';

function CarrouselComponent() {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      showArrows={false}
      showThumbs={false}
    >
      <div>
        <img src={Slider1} alt="slider1" />
      </div>
      <div>
        <img src={Slider2} alt="slider2" />
      </div>
      <div>
        <img src={Slider3} alt="slider3" />
      </div>
    </Carousel>
  );
}

export default CarrouselComponent;
