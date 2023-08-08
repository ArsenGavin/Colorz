import '../../Styles/Lock.css';
import ImgLock from '../../assests/img-video/computer/imgLock.png';
import Vector from '../../assests/img-video/computer/Vector.png';

function LockComponent() {
  return (
    <div className="lock">
      <img alt="imgLock" src={ImgLock} className="img__lock" />
      <div className="container__lock">
        <div className="box__lock">
          <div className="box__icon__lock">
            <img alt="icon" src={Vector} className="icon__lock" />
          </div>

          <p className="title__box__lock">
            The pudique (or je suis en pyjama et j’assume pas) effect
          </p>
          <p className="subtitle__box__lock">
            With our no camera mode, you can be wherever you want and be en
            pyjama in totale discretion with professionnalisme.
          </p>
          <span className="span__CTA"></span>
        </div>
      </div>
    </div>
  );
}

export default LockComponent;
