import React from "react";
import { IkoCol, IkoContainer, IkoRow } from "../ikoComponents";

const Footer = () => {
  return (
    <footer className="footer">
      <IkoContainer>
        <IkoRow>
          <IkoCol>
            <div className="footer__copyright">
              Copyright © 2022 by Nguyễn Đình Khôi. All rights reserved
            </div>
          </IkoCol>
        </IkoRow>
      </IkoContainer>
    </footer>
  );
};

export default Footer;
