import { memo, SVGProps } from 'react';

const CreditCardIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect width={16} height={12} rx={2} stroke='#606060' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M0 4.5H16' stroke='#606060' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);
const Memo = memo(CreditCardIcon);
export { Memo as CreditCardIcon };
