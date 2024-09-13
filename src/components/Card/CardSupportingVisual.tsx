import { HTMLAttributes, ReactNode } from 'react';

type CardSupportingVisualType = {
  type: 'icon' | 'image';
  alt?: string;
  icon?: ReactNode;
  src?: string;
} & Omit<HTMLAttributes<HTMLDivElement>, 'className'>;

/**
 *  [UI Component] Card Supporting Visual (Recommended to use within Card Header)
 *  @param type image | icon
 *  @param src If type is image, should be provided
 *  @param alt If type is image, should be provided
 *  @param icon ReactNode
 *  @returns JSX.Element
 */
export default function CardSupportingVisual({ alt, icon, src, type, ...rest }: CardSupportingVisualType) {
  if (type === 'image' && (!src || !alt)) {
    console.warn('Image should have appropriate src and alt values');
  }

  return (
    <div
      {...rest}
      className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-black"
    >
      {type === 'image' ? (
        <img alt={alt} className="size-10 rounded-full object-cover" height={40} src={src} width={40} />
      ) : (
        icon
      )}
    </div>
  );
}
