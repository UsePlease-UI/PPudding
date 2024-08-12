import { PeopleFilled } from '@fluentui/react-icons';

import { Button } from '@components/Button';
import Popover from '@components/Shared/Popover';
import usePopover from '@components/Shared/usePopover';

import { customStyles } from '../Common/styles';

const PopoverExample = () => {
    const { isOpen, anchorElement, handleOpen, handleClose } = usePopover();

    return (
        <div className={customStyles.toggleComponentContainer}>
            <Button startIcon={<PeopleFilled />} size="large" variant="outlined" onClick={handleOpen}>
                유저아이디
            </Button>
            <Popover
                isOpen={isOpen}
                anchorPosition={{ vertical: 'bottom', horizontal: 'right' }}
                anchorElement={anchorElement}
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
