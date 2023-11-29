import { memo, SVGProps } from 'react';

const Graph1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 230 229' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M115 229C178.513 229 230 177.737 230 114.5C230 51.2634 178.513 0 115 0C51.4873 0 0 51.2634 0 114.5C0 177.737 51.4873 229 115 229ZM115 213.445C170.124 213.445 214.811 169.146 214.811 114.5C214.811 59.854 170.124 15.5547 115 15.5547C59.8757 15.5547 15.1887 59.854 15.1887 114.5C15.1887 169.146 59.8757 213.445 115 213.445Z'
      fill='#EEEEEE'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0 114.617C0.0634756 177.8 51.5264 229 115 229C178.513 229 230 177.737 230 114.5C230 51.2634 178.513 0 115 0C114.243 0 113.488 0.00727784 112.735 0.0217671C104.315 1.39766 103.604 12.9136 112.874 15.5068C112.938 15.5245 113 15.5466 113.062 15.573C113.707 15.5608 114.353 15.5547 115 15.5547C170.124 15.5547 214.811 59.854 214.811 114.5C214.811 169.146 170.124 213.445 115 213.445C59.9407 213.445 15.2941 169.25 15.1888 114.693C15.1742 114.63 15.1643 114.565 15.1593 114.5C14.4437 105.251 0.547764 104.683 0.00705167 114.5C0.00488535 114.539 0.00253429 114.578 0 114.617Z'
      fill='url(#paint0_linear_1_67)'
    />
    <defs>
      <linearGradient id='paint0_linear_1_67' x1={0} y1={0} x2={0} y2={229} gradientUnits='userSpaceOnUse'>
        <stop stopColor='#9482FC' />
        <stop offset={1} stopColor='#7960F9' />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(Graph1Icon);
export { Memo as Graph1Icon };
