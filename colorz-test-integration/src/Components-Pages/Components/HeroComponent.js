import '../../Styles/Hero.css';
import Hero from '../../assests/img-video/computer/Hero2.png';
import Cocarde from '../../assests/img-video/computer/Cocarde_prix.png';

function HeaderComponent() {
  return (
    <>
      <div className="box__img__hero">
        <img alt="hero" src={Hero} className="img__hero" />
      </div>

      <div className="container__text__hero">
        <p className="paragraph__hero">
          Du JAMAIS VU (enfin jusqu’à maintenant, du coup)
        </p>
        <p className="title__hero">
          Avec Vision.R, travaillez au bureau... <br className="br__hero" />
          comme si vous étiez encore à la maison !
        </p>
      </div>
      <img alt="cocarde" src={Cocarde} className="cocarde__hero" />
    </>
  );
}

export default HeaderComponent;
