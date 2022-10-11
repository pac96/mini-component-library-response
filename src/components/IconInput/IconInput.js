import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper>
        <Icon id={icon} />
      </IconWrapper>
      <NativeInput placeholder={placeholder} />
    </Wrapper>
  );
};

const NativeInput = styled.input`
  padding-left: 32px;
  height: 36px;
  border: 0px;
  border-bottom: 1px solid ${COLORS.black};
`;

const Wrapper = styled.label`
  position: relative;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  margin: auto 0;
`;

export default IconInput;
