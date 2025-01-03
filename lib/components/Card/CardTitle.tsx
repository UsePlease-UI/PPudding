import { HTMLAttributes, ReactNode } from 'react';

import { joinClassNames } from '@utils/format';

export interface CardTitleType extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title: ReactNode;
  subtitle?: ReactNode;
}

export default function CardTitle({ className, subtitle, title, ...rest }: CardTitleType) {
  return (
    <div {...rest} className={joinClassNames('flex w-full flex-col', className && className)}>
      {typeof title === 'string' ? <h4 className="text-16 font-semibold">{title}</h4> : title}
      {subtitle && typeof subtitle === 'string' ? <small className="text-12 font-medium">{subtitle}</small> : subtitle}
    </div>
  );
}
