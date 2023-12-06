import { memo, SVGProps } from 'react';

const LayoutIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect width={16} height={16} rx={2} stroke='#606060' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M0 5.33333H16' stroke='#606060' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M5.33333 16V5.33333' stroke='#606060' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);
const Memo = memo(LayoutIcon);
export { Memo as LayoutIcon };
