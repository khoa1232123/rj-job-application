import React from "react";
import { IkoCol, IkoContainer, IkoRow, IkoTitle } from "../ikoComponents";

const Career = () => {
  return (
    <div className="section">
      <IkoContainer>
        <IkoRow>
          <IkoCol>
            <IkoTitle>
              <i className="fa-solid fa-briefcase"></i> Mục tiêu nghề nghiệp
            </IkoTitle>
          </IkoCol>
        </IkoRow>
        <IkoRow>
          <IkoCol>
            <div>
              <p>- Có một công việc ổn định phù hợp với bản thân</p>
              <p>
                - Luôn cố gắng để nâng cao trình độ để trở thành một nhân viên
                xuất sắc trong lĩnh vực mình đảm nhiệm
              </p>
              <p>
                - Học hỏi, tích lũy thêm kinh nghiệm, kiến thức, rèn luyện kỹ
                năng tăng độ chính xác, nhanh chóng.
              </p>
              <p>
                - Vận dụng được hết các kinh nghiệm lập trình của bản thân vào
                trong công việc.
              </p>
            </div>
          </IkoCol>
        </IkoRow>
      </IkoContainer>
    </div>
  );
};

export default Career;
