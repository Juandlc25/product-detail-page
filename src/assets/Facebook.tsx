import { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {}

const Facebook = (props: Props) => (
  <svg
    width="17"
    height="26"
    viewBox="0 0 17 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.75 10.5V15.5H5.5V24.25H10.5V15.5H14.25L15.5 10.5H10.5V8C10.5 7.66848 10.6317 7.35054 10.8661 7.11612C11.1005 6.8817 11.4185 6.75 11.75 6.75H15.5V1.75H11.75C10.0924 1.75 8.50269 2.40848 7.33058 3.58058C6.15848 4.75269 5.5 6.3424 5.5 8V10.5H1.75Z"
      stroke="white"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
export default Facebook;
