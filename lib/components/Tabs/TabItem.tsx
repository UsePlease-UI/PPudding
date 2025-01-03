import { cloneElement, ReactElement, ReactNode, useCallback } from 'react';

import { useTab } from '@components/useTab';

import { joinClassNames } from '@utils/format';

export interface TabItemType {
  index: number;
  value: number;
  className?: string;
  label?: ReactNode;
  icon?: ReactNode;
  onChange?: (newValue: number) => void;
}

const a11yProps = (index: number, value: number) => {
  return {
    'aria-controls': `tabpanel-${index}`,
    'aria-selected': value === index,
    id: `tab-${index}`,
    role: 'tab',
    ...(value !== index && { tabIndex: -1 }),
  };
};

export default function TabItem(props: TabItemType) {
  const { className, icon, index, label, onChange, value } = props;
  const { linkRefs } = useTab();

  const handleClick = useCallback(
    (newValue: number) => {
      if (onChange) {
        onChange(newValue);
      }
    },
    [onChange],
  );

  return (
    <button
      type="button"
      {...a11yProps(index, value)}
      ref={linkRefs[index - 1]}
      onClick={() => handleClick(index)}
      className={joinClassNames(
        'flex size-full min-h-14 cursor-pointer flex-col items-center justify-center',
        className && className,
      )}
    >
      <div className="flex items-center justify-center">
        {icon && (
          <span className="my-3 block size-4.5">
            {cloneElement(icon as ReactElement, {
              className: joinClassNames('!block h-4.5 w-4.5 text-primary-950'),
            })}
          </span>
        )}
        {label &&
          (typeof label === 'string' ? (
            <p
              className={joinClassNames(
                'mx-1 my-2.25 text-16 font-medium text-primary-950',
                value === index ? 'font-bold' : 'font-medium',
              )}
            >
              {label}
            </p>
          ) : (
            label
          ))}
      </div>
      <div
        id={`tab-indicator-${index}`}
        className={joinClassNames(
          'h-0.5 w-4/5 rounded-full bg-primary-100 transition-all duration-75',
          value === index ? 'visible' : 'invisible',
        )}
      />
    </button>
  );
}
