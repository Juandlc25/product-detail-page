import { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {}

const ChevronRight = (props: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={6}
    height={10}
    fill="none"
    {...props}
  >
    <path
      fill="#A06056"
      fillRule="evenodd"
      d="M1.707.293A1 1 0 0 0 .293 1.707L3.586 5 .293 8.293a1 1 0 0 0 1.414 1.414l4-4a1 1 0 0 0 0-1.414l-4-4Z"
      clipRule="evenodd"
    />
  </svg>
);
export default ChevronRight;
