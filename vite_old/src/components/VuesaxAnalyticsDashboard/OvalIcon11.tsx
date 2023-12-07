import { memo, SVGProps } from 'react';

const OvalIcon11 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 39 39' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={19.5} cy={19.5} r={19.5} fill='#7E72F2' />
  </svg>
);
const Memo = memo(OvalIcon11);
export { Memo as OvalIcon11 };
