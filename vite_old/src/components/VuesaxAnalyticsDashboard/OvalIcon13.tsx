import { memo, SVGProps } from 'react';

const OvalIcon13 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    preserveAspectRatio='none'
    viewBox='0 0 34 34'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    {...props}
  >
    <circle cx={17} cy={17} r={17} fill='url(#pattern0)' />
    <defs>
      <pattern id='pattern0' patternContentUnits='objectBoundingBox' width={1} height={1}>
        <use xlinkHref='#image0_1_235' transform='scale(0.0294118)' />
      </pattern>
      <image
        id='image0_1_235'
        width={34}
        height={34}
        xlinkHref='data:image/png;base64,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'
      />
    </defs>
  </svg>
);
const Memo = memo(OvalIcon13);
export { Memo as OvalIcon13 };