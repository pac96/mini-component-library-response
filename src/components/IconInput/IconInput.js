import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const styles = {
  small: {
    fontSize: 14,
    iconSize: 16,
    borderThickness: 1,
    height: 24,
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    borderThickness: 2,
    height: 36,
  },
};

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  const stylesForSize = styles[size] || styles["large"];

  return (
    <Wrapper
      style={{
        "--height": stylesForSize.height + "px",
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper
        style={{
          "--size": stylesForSize.iconSize + "px",
        }}
      >
        <Icon id={icon} size={stylesForSize.iconSize} />
      </IconWrapper>
      <TextInput
        style={{
          "--width": width + "px",
          "--height": stylesForSize.height / 16 + "rem",
          "--border-thickness": stylesForSize.borderThickness + "px",
          "--font-size": stylesForSize.fontSize / 16 + "rem",
        }}
        {...delegated}
      />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  position: relative;
  display: block;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const TextInput = styled.input`
  padding-left: var(--height);
  height: var(--height);
  width: var(--width);
  font-size: var(--font-size);
  border: 0px;
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  color: inherit;
  font-weight: 700;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:focus {
    // I think this looks better hehe
    outline-offset: 4px;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  margin: auto 0;
  height: var(--size);
`;

export default IconInput;
