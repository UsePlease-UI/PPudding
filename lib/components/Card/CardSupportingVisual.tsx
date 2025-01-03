import { HTMLAttributes, ReactNode } from 'react';

import { joinClassNames } from '@utils/format';

export interface CardSupportingVisualType extends HTMLAttributes<HTMLDivElement> {
  type: 'icon' | 'image';
  alt?: string;
  src?: string;
  icon?: ReactNode;
}

export default function CardSupportingVisual({ alt, className, icon, src, type, ...rest }: CardSupportingVisualType) {
  if (type === 'image' && (!src || !alt)) {
    console.warn('Image should have appropriate src and alt values');
  }

  return (
    <div
      {...rest}
      className={joinClassNames(
        'flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-black',
        className && className,
      )}
    >
      {type === 'image' ? (
        <img alt={alt} className="size-10 rounded-full object-cover" height={40} src={src} width={40} />
      ) : (
        icon
      )}
    </div>
  );
}
