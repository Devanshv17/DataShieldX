import { memo, SVGProps } from 'react';

const Path2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 371 86' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.656897 54.336C0.656897 54.336 13.9647 51.3738 27.4222 32.1672C40.8797 12.9605 50.1787 5.39509 50.1787 5.39509C50.1787 5.39509 65.0316 -7.16152 77.059 10.3978C89.0864 27.9572 108.074 62.9783 108.074 62.9783C108.074 62.9783 123.556 86.3729 141.607 62.9783C155.903 36.136 165.483 19.1712 165.483 19.1712C165.483 19.1712 186.591 -16.6437 203.316 14.4495C220.041 45.5427 225.917 62.0231 230.625 70.8143C235.333 79.6055 247.18 98.4661 267.581 73.7251C287.983 48.9841 292.566 43 292.566 43C292.566 43 308.085 22.7919 330.126 41.5414C345.334 57.3202 341.261 62.5348 370.657 75.8537'
      stroke='#FF9F43'
      strokeWidth={2}
    />
  </svg>
);
const Memo = memo(Path2Icon);
export { Memo as Path2Icon };
