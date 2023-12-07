import { memo, SVGProps } from 'react';

const ClockIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={8} cy={8} r={8} stroke='#606060' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M8 3.2V8L11.2 9.6' stroke='#606060' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);
const Memo = memo(ClockIcon);
export { Memo as ClockIcon };
