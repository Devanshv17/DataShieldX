import { memo, SVGProps } from 'react';

const Path2Icon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 174 188' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0 36.3598L90.9482 0L174 40.3134L168.97 134.83L90.9482 188L72.3711 102.716L0 36.3598Z'
      fill='url(#paint0_linear_1_98)'
    />
    <defs>
      <linearGradient id='paint0_linear_1_98' x1={0} y1={0} x2={0} y2={188} gradientUnits='userSpaceOnUse'>
        <stop offset={0.00424937} stopColor='#21CFD3' />
        <stop offset={1} stopColor='#1EDDC5' />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(Path2Icon2);
export { Memo as Path2Icon2 };
