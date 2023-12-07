import { memo, SVGProps } from 'react';

const OvalIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={6} cy={6} r={6} stroke='#7F68FA' strokeWidth={2} />
  </svg>
);
const Memo = memo(OvalIcon3);
export { Memo as OvalIcon3 };
