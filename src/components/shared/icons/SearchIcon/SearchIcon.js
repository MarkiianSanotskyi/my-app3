import React from "react";

const SVG = ({
  style = {},
  fill = "#fff",
  width = "100%",
  className = "",
  viewBox = "0 0 27 27",
  background = "rgba (0 0 0 0)"
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    background={background}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fillRule="evenodd"
  >
    <path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z" />
  </svg>
);

export default SVG;
