import { memo, SVGProps } from 'react';

const PathIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 10 5' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0L5 5L10 0' stroke='#606060' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);
const Memo = memo(PathIcon);
export { Memo as PathIcon };
