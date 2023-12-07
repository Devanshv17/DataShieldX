import { memo, SVGProps } from 'react';

const CircleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={5} cy={5} r={5} stroke='white' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);
const Memo = memo(CircleIcon);
export { Memo as CircleIcon };
