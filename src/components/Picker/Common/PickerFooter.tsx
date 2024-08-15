import { Button } from '@components/Button';

type PickerFooterType = {
    onCancel: () => void;
    onConfirm: () => void;
};

export default function PickerFooter({ onCancel, onConfirm }: PickerFooterType) {
    return (
        <div className="flex items-center justify-end">
            <Button variant="text" size="medium" onClick={onCancel}>
                취소
            </Button>
            <Button variant="text" size="medium" onClick={onConfirm}>
                확인
            </Button>
        </div>
    );
}
