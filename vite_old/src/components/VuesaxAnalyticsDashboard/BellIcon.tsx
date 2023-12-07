import { memo, SVGProps } from 'react';

const BellIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M15 6C15 2.68629 12.3137 0 9 0C5.68629 0 3 2.68629 3 6C3 13 0 15 0 15H18C18 15 15 13 15 6'
      stroke='#606060'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M10.73 19C10.3722 19.6168 9.71309 19.9965 9.00002 19.9965C8.28695 19.9965 7.62782 19.6168 7.27002 19'
      stroke='#606060'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(BellIcon);
export { Memo as BellIcon };
