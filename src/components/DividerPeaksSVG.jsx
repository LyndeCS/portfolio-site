import React from "react";
import wavesSvg from "../assets/art/peaks200.svg"; // Adjust the path as needed

const DividerSVG = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 900 200"
			preserveAspectRatio="xMidYMid meet"
			className="w-full h-auto"
		>
			<path fill="#141419" d="M0 0h900v200H0z" />
			<path
				fill="#b9ece0"
				d="m0 66 113 42 112-35 113 31 112-11 113-16 112 32 113-51 112 24v119H0Z"
			/>
			<path
				fill="#85b0b4"
				d="m0 130 113-38 112 5 113 10 112 17 113-15 112-8 113-5 112-14v119H0Z"
			/>
			<path
				fill="#5d7681"
				d="m0 116 113 32 112-14 113 2 112 8 113-4 112-6 113-31 112 20v78H0Z"
			/>
			<path
				fill="#39414b"
				d="m0 149 113 13 112-12 113-5 112 24 113-3h112l113-16 112 11v40H0Z"
			/>
			<path
				fill="#141419"
				d="m0 160 113 22 112-15 113 1 112 1 113-12 112 25 113 2 112 1v16H0Z"
			/>
		</svg>
	);
};

export default DividerSVG;
