import React from 'react'

interface Props {
  size?: number;
  bgColor?: string;
  lineColor?: string;
}

const Logo = ({ size = 26, bgColor = "black", lineColor = "white" }: Props) => {
  return (
    <>
      <svg width={size} height={size - 2} viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25.75 11C25.75 12.0444 25.5733 13.0538 25.2437 14.0086C23.7064 18.461 18.825 21.75 13 21.75C7.17495 21.75 2.29357 18.461 0.756311 14.0086C0.426659 13.0538 0.25 12.0444 0.25 11C0.25 6.45365 3.60767 2.5365 8.39762 0.971995C9.82461 0.505908 11.3764 0.25 13 0.25C14.6236 0.25 16.1754 0.505908 17.6024 0.971995C22.3923 2.5365 25.75 6.45365 25.75 11Z" fill={bgColor} stroke={lineColor} strokeWidth="0.5" />
        <ellipse cx="2.4698" cy="3.86329" rx="2.4698" ry="3.86329" transform="matrix(0.87555 -0.483128 0.517064 0.855947 15.6 6.38646)" fill={lineColor} />
        <ellipse cx="1.48188" cy="2.41456" rx="1.48188" ry="2.41456" transform="matrix(0.87555 -0.483128 0.517064 0.855947 16.64 6.43187)" fill={bgColor} />
        <ellipse cx="2.4698" cy="3.86329" rx="2.4698" ry="3.86329" transform="matrix(-0.87555 -0.483128 -0.517064 0.855947 10.4 6.38646)" fill={lineColor} />
        <ellipse cx="1.48188" cy="2.41456" rx="1.48188" ry="2.41456" transform="matrix(-0.87555 -0.483128 -0.517064 0.855947 9.25186 6.43187)" fill={bgColor} />
        <ellipse cx="2.08" cy="3" rx="2.08" ry="3" fill={bgColor} />
        <ellipse cx="23.92" cy="3" rx="2.08" ry="3" fill={bgColor} />
      </svg>
    </>
  )
}

export default Logo