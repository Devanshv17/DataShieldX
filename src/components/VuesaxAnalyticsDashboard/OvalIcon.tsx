import { memo, SVGProps } from 'react';

const OvalIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 63 62' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={31.1041} cy={31} r={31} fill='#D5D1FB' />
  </svg>
);
const Memo = memo(OvalIcon);
export { Memo as OvalIcon };
