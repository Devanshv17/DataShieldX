import { memo, SVGProps } from 'react';

const ProgressBar4Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 340 4' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0 2C0 0.895431 0.895431 0 2 0H338C339.105 0 340 0.895431 340 2V2C340 3.10457 339.105 4 338 4H140.933H2C0.895432 4 0 3.10457 0 2V2Z'
      fill='#ECF9F1'
    />
    <rect width={169} height={4} rx={2} fill='#28C76F' />
  </svg>
);
const Memo = memo(ProgressBar4Icon);
export { Memo as ProgressBar4Icon };
