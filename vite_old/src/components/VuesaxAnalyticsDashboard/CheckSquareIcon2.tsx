import { memo, SVGProps } from 'react';

const CheckSquareIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 19 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M6 8L9 11L19 1' stroke='#606060' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M18 9V16C18 17.1046 17.1046 18 16 18H2C0.89543 18 0 17.1046 0 16V2C0 0.89543 0.89543 0 2 0H13'
      stroke='#606060'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(CheckSquareIcon2);
export { Memo as CheckSquareIcon2 };
