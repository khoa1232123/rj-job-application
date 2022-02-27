import React from "react";
import { IkoCol, IkoContainer, IkoRow, IkoTitle } from "../ikoComponents";

const Education = () => {
  return (
    <div className="section">
      <IkoContainer>
        <IkoRow>
          <IkoCol>
            <IkoTitle>
              <i className="fa-solid fa-graduation-cap"></i> Học vấn
            </IkoTitle>
          </IkoCol>
        </IkoRow>
        <IkoRow>
          <IkoCol>
            <div className="section__list">
              <IkoRow col={2} smCol={12} className="section__item">
                <IkoCol className="section__item__left">
                  <div className="section__year">2010 - 2014</div>
                </IkoCol>
                <IkoCol col={10} smCol={12} className="section__item__right">
                  <div className="section__content">
                    <h3 className="section__content__title">
                      Đại học Công nghệ GTVT{" "}
                      <span>- Chuyên ngành Công Nghệ Thông Tin</span>
                    </h3>
                    <div className="section__desc">
                      <p>
                        <b>Bằng cấp: </b>Cử nhân
                      </p>
                      <p>
                        <b>Loại tốt nghiệp: </b>Khá
                      </p>
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

export default Education;
