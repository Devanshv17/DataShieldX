import { memo, SVGProps } from 'react';

const UsersIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 29 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M20.1041 22V19.6667C20.1041 17.0893 17.8655 15 15.1041 15H5.10409C2.34267 15 0.104092 17.0893 0.104092 19.6667V22'
      stroke='#7E72F2'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <circle cx={10.1041} cy={5} r={5} stroke='#7E72F2' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M28.1041 22V19.615C28.1023 17.4412 26.4574 15.5434 24.1041 15'
      stroke='#7E72F2'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M19.1041 0C21.4578 0.526262 23.1041 2.37831 23.1041 4.5C23.1041 6.62169 21.4578 8.47374 19.1041 9'
      stroke='#7E72F2'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(UsersIcon);
export { Memo as UsersIcon };
