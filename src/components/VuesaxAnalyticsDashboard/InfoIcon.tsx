import { memo, SVGProps } from 'react';

const InfoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={9} cy={9} r={9} stroke='white' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M9.5 13V9' stroke='white' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);
const Memo = memo(InfoIcon);
export { Memo as InfoIcon };
