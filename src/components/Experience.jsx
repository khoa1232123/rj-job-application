import React from "react";
import { IkoCol, IkoContainer, IkoRow, IkoTitle } from "../ikoComponents";

const Experience = () => {
  return (
    <div className="section">
      <IkoContainer>
        <IkoRow>
          <IkoCol>
            <IkoTitle>
              <i className="fa-solid fa-briefcase"></i> Kinh nghiệm
            </IkoTitle>
          </IkoCol>
        </IkoRow>
        <IkoRow>
          <IkoCol>
            <div className="section__list">
              <IkoRow col={2} className="section__item">
                <IkoCol className="section__item__left">
                  <div className="section__year">2020 - Hiện nay</div>
                </IkoCol>
                <IkoCol col={10} className="section__item__right">
                  <div className="section__content">
                    <h3 className="section__content__title">
                      <span>Tự học ReactJS</span>
                    </h3>
                    <div className="section__desc">
                      <p>- Viết Theme</p>
                    </div>
                  </div>
                </IkoCol>
              </IkoRow>
              <IkoRow col={2} className="section__item">
                <IkoCol className="section__item__left">
                  <div className="section__year">2021 - 2021</div>
                </IkoCol>
                <IkoCol col={10} className="section__item__right">
                  <div className="section__content">
                    <h3 className="section__content__title">
                      Công ty Youtech
                      <span> - Nhân viên lập trình Font-end (Wordpress)</span>
                    </h3>
                    <div className="section__desc">
                      <p>- Viết Theme core</p>
                      <p>- Viết Plugin cho theme</p>
                    </div>
                  </div>
                </IkoCol>
              </IkoRow>
              <IkoRow col={2} className="section__item">
                <IkoCol className="section__item__left">
                  <div className="section__year">2017 - 2020</div>
                </IkoCol>
                <IkoCol col={10} className="section__item__right">
                  <div className="section__content">
                    <h3 className="section__content__title">
                      Công ty Cleversoft
                      <span> - Nhân viên lập trình Font-end (Wordpress)</span>
                    </h3>
                    <div className="section__desc">
                      <p>- Lập trình các chức năng cho sản phẩm</p>
                      <p>- Hỗ trợ sửa lỗi cho khách hàng</p>
                    </div>
                  </div>
                </IkoCol>
              </IkoRow>
              <IkoRow col={2} className="section__item">
                <IkoCol className="section__item__left">
                  <div className="section__year">2013 - 2016</div>
                </IkoCol>
                <IkoCol col={10} className="section__item__right">
                  <div className="section__content">
                    <h3 className="section__content__title">
                      Công ty BictWeb
                      <span> - Nhân viên lập trình Font-end (Wordpress)</span>
                    </h3>
                    <div className="section__desc">
                      <p>- Lập trình các chức năng cho sản phẩm</p>
                      <p>- Hỗ trợ sửa lỗi cho khách hàng</p>
                    </div>
                  </div>
                </IkoCol>
              </IkoRow>
            </div>
          </IkoCol>
        </IkoRow>
      </IkoContainer>
    </div>
  );
};

export default Experience;
