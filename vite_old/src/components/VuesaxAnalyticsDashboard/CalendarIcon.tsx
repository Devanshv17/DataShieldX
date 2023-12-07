import { memo, SVGProps } from 'react';

const CalendarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect
      y={2}
      width={16}
      height={16}
      rx={2}
      stroke='#606060'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M11.5 0V4' stroke='#606060' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M4.5 0V4' stroke='#606060' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M0 7.5H16' stroke='#606060' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);
const Memo = memo(CalendarIcon);
export { Memo as CalendarIcon };
