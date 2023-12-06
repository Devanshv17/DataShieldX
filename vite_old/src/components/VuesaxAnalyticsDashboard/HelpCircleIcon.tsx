import { memo, SVGProps } from 'react';

const HelpCircleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={8} cy={8} r={8} stroke='#606060' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M5.672 5.6C6.06035 4.49604 7.18831 3.83313 8.34174 4.03097C9.49518 4.22882 10.3377 5.22972 10.336 6.4C10.336 8 7.936 8.8 7.936 8.8'
      stroke='#606060'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(HelpCircleIcon);
export { Memo as HelpCircleIcon };
