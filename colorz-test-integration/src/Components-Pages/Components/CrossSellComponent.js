import '../../Styles/CrossSell.css';

import Product1 from '../../assests/img-video/computer/Product_1.png';
import Product2 from '../../assests/img-video/computer/Product_2.png';
import Product3 from '../../assests/img-video/computer/Product_3.png';

function CrossSellComponent() {
  return (
    <div className="container__crossSell">
      <h5 className="title__crossSell">
        Some indispensables accessoires to optimize your experience
      </h5>
      <div className="box__crossSell">
        <div className="box__card">
          <div className="card">
            <img
              className="img__card"
              src={Product1}
              alt="Contrast React Bootstrap Card component"
            />
            <div className="product__card">
              <p className="title__card">
                The funny filter kit (D’jeuns friendly)
              </p>
              <p className="price__card">199,00 €</p>
            </div>
          </div>
          <div className="card">
            <img
              className="img__card"
              src={Product2}
              alt="Contrast React Bootstrap Card component"
            />
            <div className="product__card">
              <p className="title__card">Screen camera off</p>
              <p className="price__card">229,00 €</p>
            </div>
          </div>
          <div className="card">
            <img
              className="img__card"
              src={Product3}
              alt="Contrast React Bootstrap Card component"
            />
            <div className="product__card">
              <p className="title__card">The Charentaiz (Yeuv Friendly)</p>
              <p className="price__card">349,95 €</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrossSellComponent;
