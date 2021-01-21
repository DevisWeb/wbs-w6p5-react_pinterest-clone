import "./style.css";
import { useMemo } from "react";
import StarSvg from "./starsvg";

export default function StarIconFilled({ index, rate }) {
  return (
    <StarSvg
      //fill={rate >= index ? "orange" : "rgba(255,255,255, 0.5)"}
      //fill={rate >= index ? "orange" : "rgb(17,17,17)"}
      fill={rate >= index ? "orange" : "none"}
    />
  );
}
