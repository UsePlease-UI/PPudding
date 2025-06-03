import { MouseEvent, useCallback, useMemo, useState } from 'react';

const usePopover = () => {
  const [anchorElement, setAnchorElement] = useState<HTMLElement | null>(null);

  const isOpen = useMemo(() => Boolean(anchorElement), [anchorElement]);

  const handleOpen = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      if (anchorElement) {
        setAnchorElement(null);
      } else {
        setAnchorElement(e.currentTarget);
      }
    },
    [anchorElement],
  );

  const handleClose = useCallback(() => setAnchorElement(null), []);

  return { anchorElement, handleClose, handleOpen, isOpen };
};

export default usePopover;
