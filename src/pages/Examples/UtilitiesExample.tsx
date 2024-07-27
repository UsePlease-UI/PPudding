import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Button, ToggleButton, ToggleButtonGroup } from '@components/Button';
import Popover from '@components/Shared/Popover';
import usePopover from '@components/Shared/usePopover';

import { PeopleFilled } from '@fluentui/react-icons';
import useMobile from '@hooks/useMobile';

import Heading from './components/Heading';
import { customStyles } from './components/styles';
import { CalenderExample } from './Utilities';
import { DragNDropExample } from './WebAPI';

export default function UtilitiesExample() {
    const [searchParams] = useSearchParams();
    const component = searchParams.get('component');

    const { isMobile, isTablet } = useMobile();
    const { isOpen, anchorElement, handleOpen, handleClose } = usePopover();

    const [selected, setSelected] = useState(component || 'Popover');

    return (
        <div className="flex flex-col gap-10">
            <Heading title="Utilities Playground" />
            <div className={customStyles.toggleContainer}>
                <ToggleButtonGroup value={selected} onChange={(e) => setSelected(e.currentTarget.value)}>
                    <ToggleButton
                        size={isMobile ? 'small' : isTablet ? 'medium' : 'large'}
                        name="components"
                        value="Calendar"
                    >
                        Calendar
                    </ToggleButton>
                    <ToggleButton
                        size={isMobile ? 'small' : isTablet ? 'medium' : 'large'}
                        name="components"
                        value="Drag N Drop"
                    >
                        Drag N Drop
                    </ToggleButton>
                    <ToggleButton
                        size={isMobile ? 'small' : isTablet ? 'medium' : 'large'}
                        name="components"
                        value="Popover"
                    >
                        Popover
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
            {selected === 'Popover' && (
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
            )}
            {selected === 'Calendar' && <CalenderExample />}
            {selected === 'Drag N Drop' && <DragNDropExample />}
        </div>
    );
}
