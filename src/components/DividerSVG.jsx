import React from 'react';
import wavesSvg from '../assets/art/waves2004.svg'; // Adjust the path as needed

const DividerSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 900 200" // Set the viewBox to match your SVG's aspect ratio (900:300)
      preserveAspectRatio="xMidYMid meet" // Preserve the aspect ratio
      className="w-full h-auto"
    >
      <image xlinkHref={wavesSvg} width="900" height="200" />
    </svg>
  );
};

export default DividerSVG;
