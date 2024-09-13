import { ChangeEvent, Children, cloneElement, ReactElement, ReactNode } from 'react';

import { joinClassNames } from '@utils/format';

type RadioGroupType = {
  children: ReactNode;
  value: number | string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  gap?: number;
  isRow?: boolean;
};

/**
 *  [UI Component] Radio Group Component
 *  @param children 컴포넌트
 *  @param onChange Change Event Handler
 *  @param value 선택된 라디오 버튼 값
 *  @param isRow [CSS] flex direction (row | column)
 *  @param gap [CSS] flex gap
 *  @returns JSX.Element
 */
export default function RadioGroup(props: RadioGroupType) {
  const { children, gap = 2.5, isRow = true, onChange, value } = props;

  return (
    <div
      className={joinClassNames('flex flex-col', isRow && 'flex-row items-center justify-start', gap && `gap-${gap}`)}
      role="radiogroup"
    >
      {Children.toArray(children).map((child) =>
        cloneElement(child as ReactElement, { currentValue: value, onChange }),
      )}
    </div>
  );
}
