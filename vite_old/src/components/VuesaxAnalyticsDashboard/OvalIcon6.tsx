import { memo, SVGProps } from 'react';

const OvalIcon6 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 11 11' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={5.5} cy={5.5} r={5.5} fill='#7E66FA' />
  </svg>
);
const Memo = memo(OvalIcon6);
export { Memo as OvalIcon6 };
