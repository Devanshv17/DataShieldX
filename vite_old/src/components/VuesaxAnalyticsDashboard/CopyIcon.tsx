import { memo, SVGProps } from 'react';

const CopyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect
      x={5.6}
      y={5.6}
      width={10.4}
      height={10.4}
      rx={2}
      stroke='#606060'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M2.4 10.4H1.6C0.716344 10.4 0 9.68366 0 8.8V1.6C0 0.716344 0.716344 0 1.6 0H8.8C9.68366 0 10.4 0.716344 10.4 1.6V2.4'
      stroke='#606060'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(CopyIcon);
export { Memo as CopyIcon };
