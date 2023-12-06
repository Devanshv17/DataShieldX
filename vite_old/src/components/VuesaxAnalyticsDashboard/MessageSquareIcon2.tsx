import { memo, SVGProps } from 'react';

const MessageSquareIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M18 12C18 13.1046 17.1046 14 16 14H4L0 18V2C0 0.89543 0.89543 0 2 0H16C17.1046 0 18 0.89543 18 2V12Z'
      stroke='#606060'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(MessageSquareIcon2);
export { Memo as MessageSquareIcon2 };
