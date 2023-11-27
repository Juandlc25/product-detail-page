import { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {}

const ScrollDown = (props: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    fill="none"
    {...props}
  >
    <rect
      width={48}
      height={48}
      x={1}
      y={1}
      stroke={props.color ?? "#A06056"}
      strokeWidth={2}
      rx={24}
    />
    <path
      fill={props.color ?? "#A06056"}
      fillRule="evenodd"
      d="M17.293 22.207a1 1 0 0 1 1.414-1.414L25 27.086l6.293-6.293a1 1 0 0 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7Z"
      clipRule="evenodd"
    />
  </svg>
);
export default ScrollDown;
