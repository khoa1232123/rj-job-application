import React from "react";
import { IkoCol, IkoContainer, IkoRow, IkoTitle } from "../ikoComponents";

const Project = () => {
  return (
    <div className="section">
      <IkoContainer>
        <IkoRow>
          <IkoCol>
            <IkoTitle>
              <i className="fa-solid fa-diagram-project"></i> Sản phẩm đã làm
            </IkoTitle>
          </IkoCol>
        </IkoRow>
        <IkoRow>
          <IkoCol>
            <IkoRow col={2} className="section__item">
              <IkoCol className="section__item__left">
                <div className="section__year">Khám bệnh</div>
              </IkoCol>
              <IkoCol col={10} smCol={12} className="section__item__right">
                <div className="section__content">
                  <h3 className="section__content__title">
                    <a
                      href="https://khoa1232123.github.io/admin-khambenh/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://khoa1232123.github.io/admin-khambenh/
                    </a>
                  </h3>
                  <div className="section__desc">
                    <p>
                      <b>Chức năng: </b>
                      Đăng nhập, đăng xuất, thêm sửa xóa dữ liệu
                    </p>
                    <p>
                      <b>Công nghệ: </b>
                      ReactJS, NodeJS, MongoDB...
                    </p>
                  </div>
                </div>
              </IkoCol>
            </IkoRow>
            <IkoRow col={2} className="section__item">
              <IkoCol className="section__item__left">
                <div className="section__year">Cây cảnh</div>
              </IkoCol>
              <IkoCol col={10} smCol={12} className="section__item__right">
                <div className="section__content">
                  <h3 className="section__content__title">
                    <a
                      href="https://khoa1232123.github.io/rj-ecommerce/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://khoa1232123.github.io/rj-ecommerce/
                    </a>
                  </h3>
                  <div className="section__desc">
                    <p>
                      <b>Chức năng: </b>
                      Xem sản phẩm, thêm sản phẩm vào giỏ hàng
                    </p>
                    <p>
                      <b>Công nghệ: </b>
                      ReactJS
                    </p>
                  </div>
                </div>
              </IkoCol>
            </IkoRow>
            <IkoRow col={2} className="section__item">
              <IkoCol className="section__item__left">
                <div className="section__year">Pet Food</div>
              </IkoCol>
              <IkoCol col={10} smCol={12} className="section__item__right">
                <div className="section__content">
                  <h3 className="section__content__title">
                    <a
                      href="https://khoa1232123.github.io/rj-base/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://khoa1232123.github.io/rj-base/
                    </a>
                  </h3>
                  <div className="section__desc">
                    <p>
                      <b>Chức năng: </b>
                      Xem sản phẩm, thêm sản phẩm vào giỏ hàng
                    </p>
                    <p>
                      <b>Công nghệ: </b>
                      ReactJS
                    </p>
                  </div>
                </div>
              </IkoCol>
            </IkoRow>
            <IkoRow col={2} className="section__item">
              <IkoCol className="section__item__left">
                <div className="section__year">Other</div>
              </IkoCol>
              <IkoCol col={10} smCol={12} className="section__item__right">
                <div className="section__content">
                  <h3 className="section__content__title">
                    <a
                      href="https://github.com/khoa1232123"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://github.com/khoa1232123
                    </a>
                  </h3>
                </div>
              </IkoCol>
            </IkoRow>
          </IkoCol>
        </IkoRow>
      </IkoContainer>
    </div>
  );
};

export default Project;
