import { memo, SVGProps } from 'react';

const OvalIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 110 110' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={55} cy={55} r={55} fill='#7E72F2' />
  </svg>
);
const Memo = memo(OvalIcon2);
export { Memo as OvalIcon2 };
