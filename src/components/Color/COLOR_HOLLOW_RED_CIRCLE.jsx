import React from "react";
export function COLOR_HOLLOW_RED_CIRCLE() {
  return (
    <>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_i_18590_1981)">
          <circle
            cx="15.9693"
            cy="15.75"
            r="12.4375"
            stroke="url(#paint0_linear_18590_1981)"
            stroke-width="3"
          />
        </g>
        <g filter="url(#filter1_f_18590_1981)">
          <circle
            cx="16.3049"
            cy="15.4144"
            r="12.4375"
            stroke="url(#paint1_linear_18590_1981)"
          />
          <circle
            cx="16.3049"
            cy="15.4144"
            r="12.4375"
            stroke="url(#paint2_linear_18590_1981)"
          />
        </g>
        <defs>
          <filter
            id="filter0_i_18590_1981"
            x="2.0318"
            y="1.3125"
            width="28.375"
            height="28.375"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="0.5" dy="-0.5" />
            <feGaussianBlur stdDeviation="0.5" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.921569 0 0 0 0 0.164706 0 0 0 0 0.309804 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_18590_1981"
            />
          </filter>
          <filter
            id="filter1_f_18590_1981"
            x="2.61737"
            y="1.72693"
            width="27.375"
            height="27.375"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="0.375"
              result="effect1_foregroundBlur_18590_1981"
            />
          </filter>
          <linearGradient
            id="paint0_linear_18590_1981"
            x1="23.4375"
            y1="3.875"
            x2="6.6875"
            y2="22.875"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FF5C96" />
            <stop offset="0.486191" stop-color="#DB3051" />
            <stop offset="1" stop-color="#EF3741" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_18590_1981"
            x1="26.5981"
            y1="5.42192"
            x2="16.3049"
            y2="19.1794"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FF75A8" />
            <stop offset="1" stop-color="#FF75A8" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_18590_1981"
            x1="7.38793"
            y1="23.2899"
            x2="12.5889"
            y2="17.25"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FF6D6F" />
            <stop offset="1" stop-color="#FF6D6F" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
}
