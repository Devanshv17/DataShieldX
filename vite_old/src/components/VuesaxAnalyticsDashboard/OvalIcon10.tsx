import { memo, SVGProps } from 'react';

const OvalIcon10 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 39 39' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={19.5} cy={19.5} r={19.5} fill='#EA5455' />
  </svg>
);
const Memo = memo(OvalIcon10);
export { Memo as OvalIcon10 };
