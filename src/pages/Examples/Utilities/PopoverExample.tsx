import { PeopleFilled } from '@fluentui/react-icons';

import Button from '@components/Button/Button';
import Popover from '@components/Shared/Popover';
import usePopover from '@components/Shared/usePopover';

import { customStyles } from '../Common/styles';

const PopoverExample = () => {
  const { anchorElement, handleClose, handleOpen, isOpen } = usePopover();

  return (
    <div className={customStyles.toggleComponentContainer}>
      <Button size="large" startIcon={<PeopleFilled />} variant="outlined" onClick={handleOpen}>
        유저아이디
      </Button>
      <Popover
        anchorElement={anchorElement}
        anchorPosition={{ vertical: 'bottom', horizontal: 'right' }}
        isOpen={isOpen}
        onClose={handleClose}
      >
        <div className="flex w-178 flex-col gap-10">
          <p className="text-16 font-medium">프로필</p>
          <p className="text-16 font-medium">계정정보</p>
          <p className="text-16 font-medium">로그아웃</p>
        </div>
      </Popover>
    </div>
  );
};

export default PopoverExample;
