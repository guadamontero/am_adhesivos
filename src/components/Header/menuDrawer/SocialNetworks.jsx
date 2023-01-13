import React from "react";

import Icon from "../../Global/Icon";

import styled from "styled-components";
import {
  faFacebookF,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const SocialNet = styled.div`
  font-size: 24px;
  gap: 25px;
  display: flex;
  color: ${(props) => {
    return props.color;
  }};

  @media only screen and (min-width: 624px) {
    display: flex;
  }
`;

const SocialNetworks = ({ color }) => {
  return (
    <SocialNet color={color}>
      <div className="iconSocialMedia">
        <Icon icon={faFacebookF} />
      </div>
      <div className="iconSocialMedia">
        <Icon icon={faLinkedinIn} />
      </div>
      <div className="iconSocialMedia">
        <Icon icon={faWhatsapp} />
      </div>
    </SocialNet>
  );
};

export default SocialNetworks;
