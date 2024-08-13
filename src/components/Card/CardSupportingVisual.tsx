import { HTMLAttributes, ReactNode } from 'react';

type CardSupportingVisualType = Omit<HTMLAttributes<HTMLDivElement>, 'className'> & {
    type: 'image' | 'icon';
    icon?: ReactNode;
    src?: string;
    alt?: string;
};

/**
 *  [UI Component] Card Supporting Visual (Recommended to use within Card Header)
 *  @param type image | icon
 *  @param src If type is image, should be provided
 *  @param alt If type is image, should be provided
 *  @param icon ReactNode
 *  @returns JSX.Element
 */
export default function CardSupportingVisual({ type, src, alt, icon, ...rest }: CardSupportingVisualType) {
    if (type === 'image' && (!src || !alt)) {
        console.warn('Image should have appropriate src and alt values');
    }

    return (
        <div
            {...rest}
            className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-black"
        >
            {type === 'image' ? (
                <img width={40} height={40} src={src} alt={alt} className="h-10 w-10 rounded-full object-cover" />
            ) : (
                icon
            )}
        </div>
    );
}
