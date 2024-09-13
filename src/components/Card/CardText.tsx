import { ReactNode, useCallback, useState } from 'react';

import { ChevronDownFilled, ChevronUpFilled } from '@fluentui/react-icons';

import IconButton from '@components/Button/IconButton';

import { TextType } from './types';

type CardTextType = TextType & {
    expandedContents?: ReactNode;
    isExpandable?: boolean;
    onClick?: () => void;
};

/**
 *  Card Text Component (Card Body Component)
 *  @param primaryText
 *  @param secondaryText
 */
export default function CardText({
    expandedContents,
    isExpandable,
    onClick,
    primaryText,
    secondaryText,
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
            <div {...rest} className="flex items-center justify-between px-3 py-2.25">
                <div>
                    {typeof primaryText === 'string' ? (
                        <p className="text-16 font-semibold leading-20 text-gray-950">{primaryText}</p>
                    ) : (
                        primaryText
                    )}
                    {typeof secondaryText === 'string' ? (
                        <small className="text-12 font-normal leading-16 text-gray-900">{secondaryText}</small>
                    ) : (
                        secondaryText
                    )}
                </div>
                {isExpandable && (
                    <IconButton size="small" variant="text" onClick={handleClick}>
                        {isExpanded ? <ChevronUpFilled /> : <ChevronDownFilled />}
                    </IconButton>
                )}
            </div>
            {isExpandable && isExpanded && <div className="px-3 py-2.25">{expandedContents}</div>}
        </>
    );
}
