import { memo, SVGProps } from 'react';

const Graph2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 173 173' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M86.5 173C134.273 173 173 134.273 173 86.5C173 38.7274 134.273 0 86.5 0C38.7274 0 0 38.7274 0 86.5C0 134.273 38.7274 173 86.5 173ZM86.5 156.859C125.815 156.859 157.687 125.358 157.687 86.5C157.687 47.6419 125.815 16.1411 86.5 16.1411C47.1847 16.1411 15.3134 47.6419 15.3134 86.5C15.3134 125.358 47.1847 156.859 86.5 156.859Z'
      fill='#EEEEEE'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M29.3871 150.937C44.6324 164.656 64.7744 173 86.857 173C134.432 173 173 134.273 173 86.5C173 38.7274 134.432 0 86.857 0C86.0301 0 85.206 0.0116994 84.3846 0.0349425C75.1585 0.774105 71.4215 13.0252 83.4597 16.2205C84.5855 16.1678 85.7181 16.1411 86.857 16.1411C126.01 16.1411 157.75 47.6419 157.75 86.5C157.75 125.358 126.01 156.859 86.857 156.859C69.9826 156.859 54.4851 151.008 42.3122 141.238C42.1065 141.144 41.9138 141.018 41.7347 140.858C33.6966 133.665 22.3405 140.455 29.0197 150.376C29.1515 150.571 29.2739 150.759 29.3871 150.937Z'
      fill='url(#paint0_linear_1_76)'
    />
    <defs>
      <linearGradient id='paint0_linear_1_76' x1={27} y1={0} x2={27} y2={173} gradientUnits='userSpaceOnUse'>
        <stop stopColor='#FFBF85' />
        <stop offset={1} stopColor='#FFA24A' />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(Graph2Icon);
export { Memo as Graph2Icon };
