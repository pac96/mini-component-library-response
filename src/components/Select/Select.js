import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const SelectWrapper = styled.select`
  height: 43px;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  max-width: ${(props) => props.width}px;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};

    svg {
      color: ${COLORS.black};
    }
  }
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectWrapper
      width={displayedValue.width}
      value={value}
      onChange={onChange}
    >
      {children}
      <Icon id="chevron-down" size={16} />
    </SelectWrapper>
  );
};

export default Select;
