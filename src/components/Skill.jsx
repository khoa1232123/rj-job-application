import React from "react";
import { IkoCol, IkoContainer, IkoRow, IkoTitle } from "../ikoComponents";

const Skill = () => {
  return (
    <div className="section">
      <IkoContainer>
        <IkoRow>
          <IkoCol>
            <IkoTitle>
              <i className="fa-solid fa-gears"></i> Kỹ năng
            </IkoTitle>
          </IkoCol>
        </IkoRow>
        <IkoRow>
          <IkoCol>
            <div className="section__list">
              <IkoRow col={2} className="section__item">
                <IkoCol className="section__item__left">
                  <div className="section__year">Ngôn ngữ</div>
                </IkoCol>
                <IkoCol col={10} smCol={12} className="section__item__right">
                  <div className="section__content">
                    <p>HTML, CSS, Javascript, PHP</p>
                  </div>
                </IkoCol>
              </IkoRow>
              <IkoRow col={2} className="section__item">
                <IkoCol className="section__item__left">
                  <div className="section__year">Framework</div>
                </IkoCol>
                <IkoCol col={10} smCol={12} className="section__item__right">
                  <div className="section__content">
                    <p>
                      Wordpress, Bootstrap, Jquery, Sass, ReactJS, Redux,
                      NodeJS...
                    </p>
                  </div>
                </IkoCol>
              </IkoRow>
              <IkoRow col={2} className="section__item">
                <IkoCol className="section__item__left">
                  <div className="section__year">Database</div>
                </IkoCol>
                <IkoCol col={10} smCol={12} className="section__item__right">
                  <div className="section__content">
                    <p>
                      Có hiểu biết về MySQL, NoSQL, MongoDB, Firebase, API,
                      Restfull API...
                    </p>
                  </div>
                </IkoCol>
              </IkoRow>
              <IkoRow col={2} className="section__item">
                <IkoCol className="section__item__left">
                  <div className="section__year">Khác</div>
                </IkoCol>
                <IkoCol col={10} smCol={12} className="section__item__right">
                  <div className="section__content">
                    <p>Tiếng anh đọc hiểu</p>
                    <p>Có thể sử dụng Git, Github, SVN.</p>
                    <p>
                      Có thể sử dụng Photoshop cơ bản, có thể thiết kế đơn giản:
                      logo, banner, poster...
                    </p>
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

export default Skill;
