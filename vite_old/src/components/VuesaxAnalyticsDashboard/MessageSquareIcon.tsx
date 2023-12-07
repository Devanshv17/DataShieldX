import { memo, SVGProps } from 'react';

const MessageSquareIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M16 10.6667C16 11.6485 15.2041 12.4444 14.2222 12.4444H3.55556L0 16V1.77778C0 0.795938 0.795938 0 1.77778 0H14.2222C15.2041 0 16 0.795938 16 1.77778V10.6667Z'
      stroke='#606060'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(MessageSquareIcon);
export { Memo as MessageSquareIcon };
