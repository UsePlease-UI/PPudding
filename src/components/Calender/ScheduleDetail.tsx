import { TrashIcon, XCircleIcon, PencilIcon } from '@heroicons/react/24/outline';

import Button from 'components/Button/Button';

type ScheduleDetailType = {
    idx: number;
    title: string;
    description: string;
    day: string;
    isStartDate: boolean;
    handleDeleteSchedule: (index: number) => void;
    handleClickDetail: (type: 'open' | 'close', day: string, index: number) => void;
};

export default function ScheduleDetail(props: ScheduleDetailType) {
    const { idx, title, description, day, isStartDate, handleDeleteSchedule, handleClickDetail } = props;
    return (
        <div style={{ background: 'white' }}>
            <section style={{ display: 'flex' }}>
                <Button customCSS={{ width: 24, height: 24 }}>
                    <PencilIcon />
                </Button>
                <Button type="button" onClick={() => handleDeleteSchedule(idx)} customCSS={{ width: 24, height: 24 }}>
                    <TrashIcon />
                </Button>
                <Button onClick={() => handleClickDetail('close', day, -1)} customCSS={{ width: 24, height: 24 }}>
                    <XCircleIcon />
                </Button>
            </section>
            {!isStartDate && <span style={{ color: 'black' }}>{title}</span>}
            <span style={{ color: 'green' }}>{description}</span>
        </div>
    );
}
