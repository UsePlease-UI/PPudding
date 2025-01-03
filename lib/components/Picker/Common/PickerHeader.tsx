import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

import IconButton from '@components/Button/IconButton';

interface PickerHeaderType {
  year: number;
  onClick: (isPrev: boolean) => void;
  month?: string;
}

export default function PickerHeader({ month, onClick, year }: PickerHeaderType) {
  return (
    <div className="mb-5 flex w-full items-center justify-between">
      <IconButton size="small" onClick={() => onClick(true)}>
        <ChevronLeftIcon />
      </IconButton>
      <p className="text-center text-18 font-medium">
        <strong className="text-primary-800">
          {year}년{month && ` ${month}월`}
        </strong>
      </p>
      <IconButton size="small" onClick={() => onClick(false)}>
        <ChevronRightIcon />
      </IconButton>
    </div>
  );
}
