import React from "react";

export default function HeroGraph(props) {
  return (
    <div {...props}>
      <svg
        width="406"
        height="360"
        viewBox="0 0 406 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="30" width="376" height="360" rx="24" fill="white" />
        <rect x="70" y="166" width="28" height="154" rx="14" fill="#F2F2F2" />
        <rect
          width="28"
          height="108.28"
          rx="14"
          transform="matrix(0.999999 0.00164756 -0.00283044 0.999996 136.93 211.672)"
          fill="#F2F2F2"
        />
        <rect x="204" y="153" width="28" height="167" rx="14" fill="#C2EACD" />
        <rect
          x="271"
          y="166"
          width="28"
          height="154"
          rx="14"
          fill="#09AB37"
          fill-opacity="0.25"
        />
        <rect
          x="338"
          y="52"
          width="28"
          height="268"
          rx="14"
          fill="#09AB37"
          fill-opacity="0.25"
        />
        <path
          class="path"
          d="M4 263.712C76 257.528 63.1222 202.823 124.5 202.823C154.5 202.823 180.5 242 236 239.5C305 236.392 392 63 392 63"
          stroke="#7557D3"
          stroke-width="8"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
}
