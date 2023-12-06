import { memo, SVGProps } from 'react';

const AwardIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 28 44' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={14} cy={14} r={14} stroke='white' strokeWidth={3} strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M6.42 26.0197L4 44L14 38.0789L24 44L21.58 26'
      stroke='white'
      strokeWidth={3}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(AwardIcon);
export { Memo as AwardIcon };
