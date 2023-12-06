import { memo, SVGProps } from 'react';

const FileIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M7.875 0H1.75C0.783502 0 0 0.783502 0 1.75V15.75C0 16.7165 0.783502 17.5 1.75 17.5H12.25C13.2165 17.5 14 16.7165 14 15.75V6.125L7.875 0Z'
      stroke='#606060'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M7.875 0V6.125H14' stroke='#606060' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);
const Memo = memo(FileIcon);
export { Memo as FileIcon };
