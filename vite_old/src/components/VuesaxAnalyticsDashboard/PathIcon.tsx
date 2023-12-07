import { memo, SVGProps } from 'react';

const PathIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 706 1' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0.25H706' stroke='#CBCBCB' />
  </svg>
);
const Memo = memo(PathIcon);
export { Memo as PathIcon };
