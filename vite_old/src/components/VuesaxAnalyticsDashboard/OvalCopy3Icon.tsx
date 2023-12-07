import { memo, SVGProps } from 'react';

const OvalCopy3Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 11 11' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={5.5} cy={5.5} r={5.5} fill='#20D5CE' />
  </svg>
);
const Memo = memo(OvalCopy3Icon);
export { Memo as OvalCopy3Icon };
