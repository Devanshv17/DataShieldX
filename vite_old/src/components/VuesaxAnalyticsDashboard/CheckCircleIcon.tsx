import { memo, SVGProps } from 'react';

const CheckCircleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 17' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M16 8.064V8.8C15.998 12.3429 13.6658 15.4626 10.2683 16.4671C6.87073 17.4717 3.21711 16.1219 1.28876 13.1497C-0.639587 10.1775 -0.383309 6.29091 1.91862 3.59766C4.22055 0.904406 8.01977 0.0460215 11.256 1.488'
      stroke='#606060'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M16 2.39999L8 10.408L5.6 8.00799'
      stroke='#606060'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(CheckCircleIcon);
export { Memo as CheckCircleIcon };
