import Button from '@components/Button/Button';

interface PickerFooterType {
  onCancel: () => void;
  onConfirm: () => void;
}

export default function PickerFooter({ onCancel, onConfirm }: PickerFooterType) {
  return (
    <div className="flex items-center justify-end">
      <Button size="medium" variant="text" onClick={onCancel}>
        취소
      </Button>
      <Button size="medium" variant="text" onClick={onConfirm}>
        확인
      </Button>
    </div>
  );
}
