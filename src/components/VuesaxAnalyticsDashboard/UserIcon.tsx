import { memo, SVGProps } from 'react';

const UserIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M14 15.75V14C14 12.067 12.433 10.5 10.5 10.5H3.5C1.567 10.5 0 12.067 0 14V15.75'
      stroke='#606060'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <circle cx={7} cy={3.5} r={3.5} stroke='#606060' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);
const Memo = memo(UserIcon);
export { Memo as UserIcon };
