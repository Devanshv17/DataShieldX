import { memo, SVGProps } from 'react';

const HomeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0 5.44444L7 0L14 5.44444V14C14 14.8591 13.3036 15.5556 12.4444 15.5556H1.55556C0.696446 15.5556 0 14.8591 0 14V5.44444Z'
      stroke='#606060'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M4.66667 15.5556V7.77778H9.33333V15.5556'
      stroke='#606060'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(HomeIcon);
export { Memo as HomeIcon };
