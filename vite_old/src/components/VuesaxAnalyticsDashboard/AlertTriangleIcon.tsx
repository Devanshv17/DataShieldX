import { memo, SVGProps } from 'react';

const AlertTriangleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M6.35492 0.700177L0.194923 10.9838C-0.0635196 11.4314 -0.0650626 11.9825 0.190869 12.4315C0.446801 12.8805 0.921768 13.16 1.43856 13.1656H13.7586C14.2754 13.16 14.7503 12.8805 15.0062 12.4315C15.2622 11.9825 15.2606 11.4314 15.0022 10.9838L8.8422 0.700177C8.57851 0.265473 8.10699 0 7.59856 0C7.09013 0 6.61861 0.265473 6.35492 0.700177Z'
      stroke='#606060'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M8 5.09091V8' stroke='#606060' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);
const Memo = memo(AlertTriangleIcon);
export { Memo as AlertTriangleIcon };
