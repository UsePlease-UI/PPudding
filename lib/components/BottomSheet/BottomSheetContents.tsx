import { forwardRef, ReactNode, useCallback } from 'react';

import { PanInfo } from 'motion/react';
import * as motion from 'motion/react-client';

export interface BottomSheetContentsType {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const BottomSheetContents = forwardRef<HTMLDivElement, BottomSheetContentsType>(function BottomSheetContents(
  { children, isOpen, onClose },
  ref,
) {
  const handleDragEnd = useCallback(
    (event: MouseEvent | PointerEvent | TouchEvent, info: PanInfo) => {
      const shouldClose = info ? info.point.y > 20 || (info.point.y >= 0 && info.point.y > 45) : null;
      if (event && shouldClose) {
        onClose();
      }
    },
    [onClose],
  );

  return (
    <motion.div
      ref={ref}
      animate={isOpen ? 'visible' : 'hidden'}
      className="fixed inset-x-0 bottom-0 z-100 mx-auto overflow-y-auto rounded-t-lg bg-white p-5 shadow-01"
      drag="y"
      dragElastic={0.2}
      initial="hidden"
      dragConstraints={{ top: 0 }}
      onDragEnd={handleDragEnd}
      transition={{
        damping: 40,
        stiffness: 400,
        type: 'spring',
      }}
      variants={{
        hidden: { y: '100%' },
        visible: { y: 0 },
      }}
    >
      {children}
    </motion.div>
  );
});

export default BottomSheetContents;
