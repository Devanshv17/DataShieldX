import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { PathIcon } from './PathIcon.js';
import classes from './RightArrow.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 0:370 */
export const RightArrow: FC<Props> = memo(function RightArrow(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.path}>
        <PathIcon className={classes.icon} />
      </div>
    </div>
  );
});
