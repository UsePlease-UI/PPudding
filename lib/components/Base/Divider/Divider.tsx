import { HTMLAttributes } from 'react';

import { joinClassNames } from '@utils/format';

import { DividerOrientationType, getDividerOrientationStyle } from './styles';

export interface DividerType extends HTMLAttributes<HTMLHRElement> {
  className?: string;
  orientation?: DividerOrientationType;
}

export default function Divider(props: DividerType) {
  const { className, orientation, ...rest } = props;

  return (
    <hr
      {...rest}
      className={joinClassNames('bg-black', getDividerOrientationStyle(orientation), className && className)}
    />
  );
}
