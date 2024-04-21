import { ReactNode, useCallback, useState } from 'react';

import { Typography } from '@components/Base';
import { IconButton } from '@components/Button';

import { ChevronDownFilled, ChevronUpFilled } from '@fluentui/react-icons';

import { TextType } from '../types';

type CardTextType = TextType & {
    isExpandable?: boolean;
    onClick?: () => void;
    expandedContents?: ReactNode;
};

/**
 *  Card Text Component (Card Body Component)
 *  @param primaryText
 *  @param secondaryText
 */
export default function CardText({
    primaryText,
    secondaryText,
    isExpandable,
    expandedContents,
    onClick,
    ...rest
}: CardTextType) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleClick = useCallback(() => {
        setIsExpanded((prev) => !prev);
        if (onClick) {
            onClick();
        }
    }, [onClick]);

    return (
        <>
            <div {...rest} className="flex items-center justify-between px-12 py-9">
                <div>
                    {typeof primaryText === 'string' ? (
                        <Typography
                            fontSize="text-16"
                            fontWeight="font-semibold"
                            lineHeight="leading-20"
                            color="text-gray-950"
                        >
                            {primaryText}
                        </Typography>
                    ) : (
                        primaryText
                    )}
                    {typeof secondaryText === 'string' ? (
                        <Typography
                            component="small"
                            fontSize="text-12"
                            fontWeight="font-normal"
                            lineHeight="leading-16"
                            color="text-gray-600"
                        >
                            {secondaryText}
                        </Typography>
                    ) : (
                        secondaryText
                    )}
                </div>
                {isExpandable && (
                    <IconButton variant="text" size="small" onClick={handleClick}>
                        {isExpanded ? <ChevronUpFilled /> : <ChevronDownFilled />}
                    </IconButton>
                )}
            </div>
            {isExpandable && isExpanded && <div className="px-12 py-9">{expandedContents}</div>}
        </>
    );
}
