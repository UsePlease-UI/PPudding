import { ReactNode } from 'react';

import { joinClassNames } from '@utils/format';

import CardText from './CardText';

export interface CardActionsType {
  className?: string;
  primaryText?: ReactNode;
  actions?: ReactNode;
  secondaryText?: ReactNode;
}

export default function CardActions({ actions, className, primaryText, secondaryText }: CardActionsType) {
  return (
    <div className={joinClassNames((primaryText || secondaryText) && 'space-y-2.5', className && className)}>
      {(primaryText || secondaryText) && <CardText primaryText={primaryText} secondaryText={secondaryText} />}
      {actions && <div className="px-3 py-2.25">{actions}</div>}
    </div>
  );
}
