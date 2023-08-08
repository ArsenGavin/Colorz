import HeaderComponent from '../Components/HeaderComponent';
import FooterComponent from '../Components/FooterComponent';
import HeroComponent from '../Components/HeroComponent';
import CTAComponent from '../Components/CTAComponent';
import CarrouselComponent from '../Components/CarrouselComponent';
import LockComponent from '../Components/LockComponent';
import CrossSellComponent from '../Components/CrossSellComponent';
import ModalComponent from '../Components/ModalComponent';
import { useState } from 'react';

function HomePage() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <HeaderComponent toggleModal={toggleModal} />
      <HeroComponent />
      <CTAComponent toggleModal={toggleModal} />
      <CarrouselComponent />
      <LockComponent />
      <CrossSellComponent />
      <FooterComponent />
      {modal === true ? <ModalComponent toggleModal={toggleModal} /> : ''}
    </>
  );
}

export default HomePage;
