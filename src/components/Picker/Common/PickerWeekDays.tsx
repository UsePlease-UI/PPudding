import { joinClassNames } from '@utils/format';

const WEEK_DAYS = ['일', '월', '화', '수', '목', '금', '토'];

export default function PickerWeekDays() {
    return (
        <div className="mb-2.5 flex h-full w-77 gap-px">
            {WEEK_DAYS.map((val) => (
                <p
                    key={val}
                    className={joinClassNames(
                        'my-0.5 h-11 w-11 text-center text-14 font-semibold leading-44 text-primary-950',
                        (val === '일' || val === '토') && 'bg-primary-900 text-white'
                    )}
                >
                    {val}
                </p>
            ))}
        </div>
    );
}
