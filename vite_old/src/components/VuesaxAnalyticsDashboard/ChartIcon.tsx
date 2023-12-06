import { memo, SVGProps } from 'react';

const ChartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 372 108' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0.706026 73.8301C0.706026 73.8301 17.7823 73.5918 39.4578 54.5785C61.1332 35.5652 108.752 56.1597 118.456 56.1597C128.16 56.1597 136.675 55.4658 156.112 36.4718C175.549 17.4778 185.527 10.3251 212.671 31.1094C239.816 51.8936 234.029 47.7824 234.029 47.7824C234.029 47.7824 250.791 55.4393 265.84 40.8397C280.888 26.2401 286.389 15.5959 286.389 15.5959C286.389 15.5959 299.569 -4.83453 325.086 1.49864C350.603 7.83182 371.401 11.074 371.401 11.074C371.401 11.074 371.401 81.079 371.401 81.079C371.401 81.079 373.167 108 364.027 108C354.888 108 17.7091 108 7.68954 108C-2.33002 108 0.706026 73.8301 0.706026 73.8301Z'
      fill='url(#paint0_linear_1_10)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_1_10'
        x1={39.5461}
        y1={22.9816}
        x2={39.5461}
        y2={108}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#B7B1F7' stopOpacity={0.999563} />
        <stop offset={1} stopColor='white' />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(ChartIcon);
export { Memo as ChartIcon };
