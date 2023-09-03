import React from 'react';
import wavesSvg from '../assets/art/waves6.svg'; // Adjust the path as needed

const DividerSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 900 100" // Set the viewBox to match your SVG's aspect ratio (900:300)
      preserveAspectRatio="xMidYMid meet" // Preserve the aspect ratio
      className="w-full h-auto"
    >
      <image xlinkHref={wavesSvg} width="900" height="100" />
    </svg>
  );
};

export default DividerSVG;
