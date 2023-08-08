import '../../Styles/CTA.css';
import Button from 'react-bootstrap/Button';

function CTAComponent({ toggleModal }) {
  return (
    <div className="container__CTA">
      <p className="paragraph__CTA">
        Vision.R with a grand “R” like in the mot “Revolution” ! <br />
        You are afraid to feel déstabilized with the futur retour au bureau ?
        <br />
        With Vision.R, be rassuré.e.s ! Get instant, real time, high resolution,
        social videocall and feel comme à la maison. Bref, get ready to faire un
        carton !
      </p>
      <Button
        variant="danger"
        onClick={(e) => {
          e.preventDefault();
          toggleModal();
        }}
        className="button__CTA"
      >
        Buy it now
      </Button>
    </div>
  );
}

export default CTAComponent;
