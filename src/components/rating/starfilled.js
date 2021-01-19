import "./style.css";
import { useMemo } from "react";
import StarSvg from "./starsvg";

export default function StarIconFilled({ index, rate }) {
  // https://dev.to/devcord/react-hooks-useeffect-usecallback-usememo-3o42
  const fill = useMemo(() => {
    return rate >= index ? "orange" : "rgb(17,17,17)";
  }, [rate, index]);
  return <StarSvg fill={fill} />;
}
