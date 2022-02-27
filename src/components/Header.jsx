import React, { useEffect, useRef } from "react";
import { IkoCol, IkoContainer, IkoRow } from "../ikoComponents";
import userIcon from "../imgs/user-icon.jpg";

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("sticky");
      } else {
        headerRef.current.classList.remove("sticky");
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <IkoContainer className="header__wrapper">
        <IkoRow>
          <IkoCol col={3} mdCol={4} smCol={12}>
            <div className="header__img">
              <img src={userIcon} alt="" />
            </div>
          </IkoCol>
          <IkoCol col={9} mdCol={8} smCol={12}>
            <h1 className="header__title">Nguyễn Đình Khôi</h1>
            <h3 className="header__title_sub">ReactJS Developer</h3>
            <div className="header__info">
              <IkoRow>
                <IkoCol col={4} mdCol={6} smCol={12}>
                  <div className="header__info__item">
                    <div className="header__info__item__icon">
                      <i className="fas fa-venus-mars"></i>
                    </div>
                    <div className="header__info__item__txt">Nam</div>
                  </div>
                </IkoCol>
                <IkoCol col={4} mdCol={6} smCol={12}>
                  <div className="header__info__item">
                    <div className="header__info__item__icon">
                      <i className="fas fa-birthday-cake"></i>
                    </div>
                    <div className="header__info__item__txt">19/06/1994</div>
                  </div>
                </IkoCol>
                <IkoCol col={4} mdCol={6} smCol={12}>
                  <div className="header__info__item">
                    <div className="header__info__item__icon">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div className="header__info__item__txt">
                      <a href="tel:0364279330" target="_blank" rel="noreferrer">
                        0364279330
                      </a>
                    </div>
                  </div>
                </IkoCol>
                <IkoCol col={4} mdCol={6} smCol={12}>
                  <div className="header__info__item">
                    <div className="header__info__item__icon">
                      <i className="fas fa-map-marked"></i>
                    </div>
                    <div className="header__info__item__txt">
                      Canh Nậu, Thạch Thất, Hà Nội
                    </div>
                  </div>
                </IkoCol>
                <IkoCol col={4} mdCol={6} smCol={12}>
                  <div className="header__info__item">
                    <div className="header__info__item__icon">
                      <i className="far fa-envelope"></i>
                    </div>
                    <div className="header__info__item__txt">
                      <a
                        href="mailto:khoa1232123@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        khoa1232123@gmail.com
                      </a>
                    </div>
                  </div>
                </IkoCol>
                <IkoCol col={4} mdCol={6} smCol={12}>
                  <div className="header__info__item">
                    <div className="header__info__item__icon">
                      <i className="fas fa-globe"></i>
                    </div>
                    <div className="header__info__item__txt">
                      <a
                        href="https://github.com/khoa1232123/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://github.com/khoa1232123/
                      </a>
                    </div>
                  </div>
                </IkoCol>
              </IkoRow>
            </div>
          </IkoCol>
        </IkoRow>
      </IkoContainer>
    </header>
  );
};

export default Header;
