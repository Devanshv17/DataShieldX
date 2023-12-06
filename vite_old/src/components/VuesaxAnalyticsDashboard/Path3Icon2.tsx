import { memo, SVGProps } from 'react';

const Path3Icon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 219 253' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M110.142 0L217.217 62.8974L219 190.748L110.142 253L0 190.748L0 62.8974L110.142 0Z'
      stroke='#D4D4D4'
    />
  </svg>
);
const Memo = memo(Path3Icon2);
export { Memo as Path3Icon2 };
