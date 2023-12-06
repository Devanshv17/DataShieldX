import { memo, SVGProps } from 'react';

const PathIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 200 176' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M108.382 0L161.064 83.6364L200 167.487L111.571 161.163L0 176L82.8139 102.007L108.382 0Z'
      fill='url(#paint0_linear_1_97)'
    />
    <defs>
      <linearGradient id='paint0_linear_1_97' x1={0} y1={0} x2={0} y2={176} gradientUnits='userSpaceOnUse'>
        <stop stopColor='#9EA5D9' />
        <stop offset={1} stopColor='#9794D7' />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(PathIcon2);
export { Memo as PathIcon2 };
