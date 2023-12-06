import { memo, SVGProps } from 'react';

const LockIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect
      y={8}
      width={16}
      height={9.77778}
      rx={2}
      stroke='#606060'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M3.55556 8V4.44444C3.55556 1.98985 5.5454 0 8 0C10.4546 0 12.4444 1.98985 12.4444 4.44444V8'
      stroke='#606060'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(LockIcon);
export { Memo as LockIcon };
