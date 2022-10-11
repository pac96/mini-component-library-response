/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS, SIZES, SIZE_TO_HEIGHT_PX } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const DEFAULT_BORDER_RADIUS = "4px";

const getPaddingFromSize = (size) => {
  const heightForSize = SIZE_TO_HEIGHT_PX[size];
  return `${heightForSize / 8}px`;
};

const Wrapper = styled.div`
  width: 370px;
  height: ${(props) => props.height}px;
  background-color: ${(props) => props.backgroundColor};
  box-shadow: inset 0px 2px 4px ${(props) => props.boxShadowColor};
  border-radius: ${DEFAULT_BORDER_RADIUS};
  ${(props) =>
    props.addPadding ? `padding: ${getPaddingFromSize(props.size)};` : ""}
  /* from the video: trim off corners when progress bar is near full
    overflow: hidden;
  */
  overflow: hidden;
`;

const InnerProgress = styled.div`
  background-color: var(--backgroundColor);
  height: 100%;
  width: 80%;
  display: block;
  width: var(--valueAsPercentageString);
  border-bottom-left-radius: ${DEFAULT_BORDER_RADIUS};
  border-top-left-radius: ${DEFAULT_BORDER_RADIUS};
`;

const MAX = 100;

const ProgressBar = ({ value, size }) => {
  const height = SIZE_TO_HEIGHT_PX[size] || SIZE_TO_HEIGHT_PX.medium;
  const valueAsPercentageString = (value / MAX) * 100 + "%";

  return (
    <div>
      <Wrapper
        role="progressbar"
        id="progressbar"
        backgroundColor={COLORS.transparentGray15}
        height={height}
        boxShadowColor={COLORS.gray300}
        addPadding={size === SIZES.large}
        size={size}
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <VisuallyHidden>
          Progress bar {valueAsPercentageString} complete
        </VisuallyHidden>
        <InnerProgress
          style={{
            "--backgroundColor": COLORS.primary,
            "--valueAsPercentageString": valueAsPercentageString,
          }}
          value={value}
        />
      </Wrapper>
    </div>
  );
};

export default ProgressBar;
