import { memo, SVGProps } from 'react';

const FileTextIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M8.75 0H1.75C0.783502 0 0 0.783502 0 1.75V15.75C0 16.7165 0.783502 17.5 1.75 17.5H12.25C13.2165 17.5 14 16.7165 14 15.75V5.25L8.75 0Z'
      stroke='#606060'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M8.75 0V5.25H14' stroke='#606060' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M10.5 9.625H3.5' stroke='#606060' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M10.5 13.125H3.5' stroke='#606060' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M5.25 6.125H4.375H3.5' stroke='#606060' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);
const Memo = memo(FileTextIcon);
export { Memo as FileTextIcon };
