import { memo, SVGProps } from 'react';

const SearchIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={8} cy={8} r={8} stroke='#606060' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M18 18L13.65 13.65' stroke='#606060' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);
const Memo = memo(SearchIcon2);
export { Memo as SearchIcon2 };
