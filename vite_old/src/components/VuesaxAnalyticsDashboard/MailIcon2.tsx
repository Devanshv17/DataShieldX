import { memo, SVGProps } from 'react';

const MailIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M2 0H18C19.1 0 20 0.9 20 2V14C20 15.1 19.1 16 18 16H2C0.9 16 0 15.1 0 14V2C0 0.9 0.9 0 2 0Z'
      stroke='#606060'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M20 2L10 9L0 2' stroke='#606060' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);
const Memo = memo(MailIcon2);
export { Memo as MailIcon2 };
