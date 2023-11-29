import { memo, SVGProps } from 'react';

const PlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M7 0V14' stroke='white' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M0 7H14' stroke='white' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);
const Memo = memo(PlusIcon);
export { Memo as PlusIcon };
