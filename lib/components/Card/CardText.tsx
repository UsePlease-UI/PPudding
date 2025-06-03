import { ReactNode, useCallback, useId, useState } from 'react';

import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

import IconButton from '@components/Button/IconButton';

export interface CardTextType {
  isExpandable?: boolean;
  primaryText?: ReactNode;
  expandedContents?: ReactNode;
  onClick?: () => void;
  secondaryText?: ReactNode;
}

export default function CardText({
  expandedContents,
  isExpandable,
  onClick,
  primaryText,
  secondaryText,
  ...rest
}: CardTextType) {
  const id = useId();

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
            <span className="block text-16 font-semibold leading-20 text-black">{primaryText}</span>
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
          <IconButton
            aria-expanded={isExpanded}
            aria-label={isExpanded ? '항목 닫기' : '항목 열기'}
            size="small"
            variant="text"
            aria-controls={id}
            onClick={handleClick}
          >
            {isExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </IconButton>
        )}
      </div>
      {isExpandable && (
        <div className="px-3 py-2.25" hidden={!isExpanded} id={id}>
          {expandedContents}
        </div>
      )}
    </>
  );
}
