import { joinClassNames } from '@utils/format';

const WEEK_DAYS = ['일', '월', '화', '수', '목', '금', '토'];

export default function PickerWeekDays() {
  return (
    <div className="mb-2.5 flex h-full w-77 gap-px border border-black bg-black">
      {WEEK_DAYS.map((val) => (
        <span
          key={val}
          className={joinClassNames(
            'block h-11 w-11 bg-white py-0.5 text-center text-14 font-semibold leading-44 text-black',
            (val === '일' || val === '토') && 'bg-black text-white',
          )}
        >
          {val}
        </span>
      ))}
    </div>
  );
}
