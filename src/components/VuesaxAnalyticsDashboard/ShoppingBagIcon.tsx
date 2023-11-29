import { memo, SVGProps } from 'react';

const ShoppingBagIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 22 25' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M3.66667 0L0 5V22.5C0 23.8807 1.09442 25 2.44444 25H19.5556C20.9056 25 22 23.8807 22 22.5V5L18.3333 0H3.66667Z'
      stroke='#FF9F43'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M0 5.5H22' stroke='#FF9F43' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M16 10C16 12.7614 13.7614 15 11 15C8.23858 15 6 12.7614 6 10'
      stroke='#FF9F43'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(ShoppingBagIcon);
export { Memo as ShoppingBagIcon };
