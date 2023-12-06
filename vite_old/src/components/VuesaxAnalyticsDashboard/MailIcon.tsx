import { memo, SVGProps } from 'react';

const MailIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 13' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M1.6 0H14.4C15.28 0 16 0.72 16 1.6V11.2C16 12.08 15.28 12.8 14.4 12.8H1.6C0.72 12.8 0 12.08 0 11.2V1.6C0 0.72 0.72 0 1.6 0Z'
      stroke='#606060'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M16 1.6L8 6.04444L0 1.6' stroke='#606060' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);
const Memo = memo(MailIcon);
export { Memo as MailIcon };
