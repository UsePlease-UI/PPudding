import { HTMLAttributes, ReactNode } from 'react';

import { FlexBox, Typography } from '@components/Base';

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
export default function CardTitle({ title, subtitle, ...rest }: CardTitleType) {
    return (
        <FlexBox {...rest} flexDirection="flex-col" width="w-full">
            {typeof title === 'string' ? (
                <Typography component="h4" fontSize="text-16" fontWeight="font-semibold">
                    {title}
                </Typography>
            ) : (
                title
            )}
            {subtitle && typeof subtitle === 'string' ? (
                <Typography component="small" fontSize="text-12" fontWeight="font-medium">
                    {subtitle}
                </Typography>
            ) : (
                subtitle
            )}
        </FlexBox>
    );
}
