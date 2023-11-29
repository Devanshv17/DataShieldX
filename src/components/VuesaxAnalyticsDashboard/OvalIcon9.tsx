import { memo, SVGProps } from 'react';

const OvalIcon9 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 39 39' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={19.5} cy={19.5} r={19.5} fill='#28C76F' />
  </svg>
);
const Memo = memo(OvalIcon9);
export { Memo as OvalIcon9 };
