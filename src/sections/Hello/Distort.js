import { LiquidDistortionText } from "react-text-fun";
import React from 'react';

export const LiquidDistortion = ({ text }) => {
  return (
    <>
      <LiquidDistortionText
        text={text}
        fontSize={60}
        speed={0.6}
        volatility={0.02}
        fill={"white"}
      />
    </>
  );
};