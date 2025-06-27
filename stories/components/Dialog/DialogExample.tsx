import { useState } from 'react';

import Button from '@components/Button/Button';
import Dialog from '@components/Dialog';
import { useAlert } from '@components/useAlert';

export default function DialogExample() {
  const [isOpen, setIsOpen] = useState(false);

  const { onAlert } = useAlert();

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleConfirm = () => {
    setIsOpen(false);
    onAlert('인증 해제되었습니다.', { canDismiss: true, delay: 3000, variant: 'success' });
  };

  return (
    <div className="-m-10 flex h-screen w-[calc(100vw+80px)] items-center justify-center bg-gray-100">
      <Dialog canDismiss isOpen={isOpen} setIsOpen={setIsOpen}>
        <Dialog.Trigger>인증 해제</Dialog.Trigger>
        <Dialog.FocusManager>
          <Dialog.Content>
            <Dialog.Title className="mb-5">인증을 해제하시겠습니까?</Dialog.Title>
            <Dialog.Description className="mb-10">
              인증 해제 후에는 바로 로그아웃되며,
              <br />
              로그인 시에 새롭게 기기인증을 진행해야 합니다.
            </Dialog.Description>
            <Dialog.Action>
              <Button size="medium" variant="outlined" onClick={handleClose}>
                취소
              </Button>
              <Button size="medium" variant="contained" onClick={handleConfirm}>
                인증 해제
              </Button>
            </Dialog.Action>
          </Dialog.Content>
        </Dialog.FocusManager>
      </Dialog>
    </div>
  );
}
