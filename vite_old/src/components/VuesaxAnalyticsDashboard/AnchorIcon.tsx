import { memo, SVGProps } from 'react';

const AnchorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={8} cy={2.4} r={2.4} stroke='#606060' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M8 16V4.8' stroke='#606060' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M2.4 8H0C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8H13.6'
      stroke='#606060'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(AnchorIcon);
export { Memo as AnchorIcon };
