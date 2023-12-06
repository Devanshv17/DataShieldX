import { memo, SVGProps } from 'react';

const OvalIcon12 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={9} cy={9} r={9} stroke='#7E72F2' strokeWidth={3} />
  </svg>
);
const Memo = memo(OvalIcon12);
export { Memo as OvalIcon12 };
