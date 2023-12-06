import { memo, SVGProps } from 'react';

const MoreVerticalIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 2 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={1} cy={8} r={1} stroke='#606060' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
    <circle cx={1} cy={1} r={1} stroke='#606060' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
    <circle cx={1} cy={15} r={1} stroke='#606060' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);
const Memo = memo(MoreVerticalIcon);
export { Memo as MoreVerticalIcon };
