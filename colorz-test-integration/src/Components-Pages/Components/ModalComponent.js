import '../../Styles/Modal.css';
import CloseVector from '../../assests/img-video/computer/closeVector.png';
import MonkeyVector from '../../assests/img-video/computer/monkey.png';
function ModalComponent({ toggleModal }) {
  return (
    <>
      <div
        className="overlay"
        onClick={(e) => {
          e.preventDefault();
          toggleModal();
        }}
      ></div>
      <div className="content__modal">
        <div className="box__iconClose__modal">
          <img
            src={CloseVector}
            onClick={(e) => {
              e.preventDefault();
              toggleModal();
            }}
            className="close__modal"
            alt="closeIcon"
          />
        </div>
        <div className="box__iconMonkey__modal">
          <img
            src={MonkeyVector}
            className="iconMonkey__modal"
            alt="Icon Monkey"
          />
        </div>
        <p className="title__content__modal">Vous y avez (vraiment?) cru ?</p>
        <p className="paragraph__content__modal">
          En tout cas, on espère que ça vous a fait sourire, parce qu’on en a
          bien besoin en ce moment. Et sinon, vous avez sûrement des produits
          plus intéressants à vendre.
        </p>
        <p className="paragraph__content__modal">
          Ça tombe bien, nos équipes sont plus fortes en communication digitale
          qu’en innovations en carton.
        </p>
      </div>
    </>
  );
}
export default ModalComponent;
