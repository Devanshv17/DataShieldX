import { memo, SVGProps } from 'react';

const ArchiveIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 13' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M14.5455 3.61111V13H1.45455V3.61111'
      stroke='#606060'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <rect width={16} height={3.61111} stroke='#606060' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M6.54545 6.5H9.45455' stroke='#606060' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);
const Memo = memo(ArchiveIcon);
export { Memo as ArchiveIcon };
