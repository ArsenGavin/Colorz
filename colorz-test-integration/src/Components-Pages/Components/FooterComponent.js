import React from 'react';
import { CDBBox } from 'cdbreact';
import '../../Styles/Footer.css';
import colorzLogo from '../../assests/img-video/computer/Logo_Colorz.png';
import colorzLogo2 from '../../assests/img-video/computer/Logo_Created_to_Create.png';

function FooterComponent() {
  return (
    <div className="footer">
      <CDBBox
        display="flex"
        flex="column"
        className="mx-auto container"
        style={{ width: '90%' }}
      >
        <CDBBox
          display="flex"
          justifyContent="between"
          className="flex-wrap container__footer"
          style={{ width: '100%' }}
        >
          <CDBBox style={{ width: '100%' }}>
            <a href="/" className=" align-items-left p-0 text-dark">
              <img alt="logo" src={colorzLogo} className="logo__colorz" />
            </a>
          </CDBBox>
          <CDBBox
            display="flex"
            justifyContent="between"
            className="flex-wrap container__footer2"
            style={{ width: '100%' }}
          >
            <CDBBox className="box__container__footer">
              <p className="title__box__container">Paris</p>
              <CDBBox flex="column" className="text__box__container">
                16 bis avenue Parmentier
                <br />
                75011 Paris, France
              </CDBBox>
            </CDBBox>
            <CDBBox className="box__container__footer">
              <p className="title__box__container">Lyon</p>
              <CDBBox flex="column" className="text__box__container">
                1 rue Lalande
                <br />
                69006 Lyon, France
              </CDBBox>
            </CDBBox>
            <CDBBox className="box__container__footer">
              <p className="title__box__container">Nous contacter</p>
              <CDBBox flex="column" className="text__box__container">
                +33 (0)1 82 83 83 60
                <br />
                hello@colorz.fr
              </CDBBox>
            </CDBBox>
            <CDBBox className="mt-2 box__img__container__footer">
              <a href="/" className="align-items-right p-0 text-dark">
                <img alt="logo" src={colorzLogo2} className="logo__footer" />
              </a>
            </CDBBox>
          </CDBBox>
        </CDBBox>
      </CDBBox>
    </div>
  );
}

export default FooterComponent;
