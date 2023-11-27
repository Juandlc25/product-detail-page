import { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {}

const ChevronDown = (props: Props) => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 1.5L6 6.5L11 1.5"
      stroke={props?.color ?? "white"}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
export default ChevronDown;
