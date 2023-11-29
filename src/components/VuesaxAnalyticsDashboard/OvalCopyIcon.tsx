import { memo, SVGProps } from 'react';

const OvalCopyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 62 62' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={31} cy={31} r={31} fill='#FFDFC2' />
  </svg>
);
const Memo = memo(OvalCopyIcon);
export { Memo as OvalCopyIcon };
