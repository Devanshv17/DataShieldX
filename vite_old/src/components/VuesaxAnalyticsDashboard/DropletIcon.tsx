import { memo, SVGProps } from 'react';

const DropletIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M7.52941 0.657143L12.8565 6.04762C15.0109 8.22626 15.656 11.5037 14.4909 14.3514C13.3257 17.1991 10.5799 19.0559 7.53412 19.0559C4.48831 19.0559 1.7425 17.1991 0.577376 14.3514C-0.587744 11.5037 0.0573448 8.22626 2.21176 6.04762L7.52941 0.657143Z'
      stroke='#606060'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(DropletIcon);
export { Memo as DropletIcon };
