import { MouseEvent, useCallback, useMemo, useState } from 'react';

const usePopover = () => {
    const [anchorElement, setAnchorElement] = useState<HTMLElement | null>(null);

    const isOpen = useMemo(() => Boolean(anchorElement), [anchorElement]);

    const handleOpen = useCallback(
        (e: MouseEvent<HTMLElement>) => {
            if (anchorElement) {
                setAnchorElement(null);
                document.body.style.removeProperty('overflow');
            } else {
                setAnchorElement(e.currentTarget);
                document.body.style.overflow = 'hidden';
            }
        },
        [anchorElement]
    );

    const handleClose = useCallback(() => setAnchorElement(null), []);

    return { isOpen, anchorElement, handleOpen, handleClose };
};

export default usePopover;
