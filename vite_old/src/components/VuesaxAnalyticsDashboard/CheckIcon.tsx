import { memo, SVGProps } from 'react';

const CheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 11' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M16 0L5 11L0 6' stroke='white' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);
const Memo = memo(CheckIcon);
export { Memo as CheckIcon };
