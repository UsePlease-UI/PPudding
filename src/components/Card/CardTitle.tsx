import { HTMLAttributes, ReactNode } from 'react';

type CardTitleType = Omit<HTMLAttributes<HTMLDivElement>, 'className'> & {
    title: ReactNode;
    subtitle?: ReactNode;
};

/**
 *  [UI Component] Card Title (Recommended to use within Card Header)
 *  @param title Card Title
 *  @param subtitle Card SubTitle
 *  @return JSX.Element
 */
export default function CardTitle({ subtitle, title, ...rest }: CardTitleType) {
    return (
        <div {...rest} className="flex w-full flex-col">
            {typeof title === 'string' ? <h4 className="text-16 font-semibold">{title}</h4> : title}
            {subtitle && typeof subtitle === 'string' ? (
                <small className="text-12 font-medium">{subtitle}</small>
            ) : (
                subtitle
            )}
        </div>
    );
}
