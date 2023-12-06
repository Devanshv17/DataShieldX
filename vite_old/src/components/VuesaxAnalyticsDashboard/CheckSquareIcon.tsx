import { memo, SVGProps } from 'react';

const CheckSquareIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M5.05263 6.73684L7.57895 9.26315L16 0.842102'
      stroke='#606060'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M15.1579 7.57895V13.4737C15.1579 14.4038 14.4038 15.1579 13.4737 15.1579H1.68421C0.754047 15.1579 0 14.4038 0 13.4737V1.68421C0 0.754047 0.754047 0 1.68421 0H10.9474'
      stroke='#606060'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(CheckSquareIcon);
export { Memo as CheckSquareIcon };
