import { forwardRef, ReactNode, useEffect } from 'react';

import { motion, PanInfo, useAnimation } from 'framer-motion';

export type BottomSheetContentsType = {
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
};

const BottomSheetContents = forwardRef<HTMLDivElement, BottomSheetContentsType>(function BottomSheetContents(
    { children, isOpen, onClose },
    ref,
) {
    const controls = useAnimation();

    const onDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const shouldClose = info ? info.point.y > 20 || (info.point.y >= 0 && info.point.y > 45) : null;

        if (event && shouldClose) {
            controls.start('hidden');
            onClose();
        } else {
            controls.start('visible');
        }
    };

    useEffect(() => {
        controls.start(isOpen ? 'visible' : 'hidden');
    }, [isOpen, controls]);

    return (
        <motion.div
            ref={ref}
            animate={controls}
            className="fixed inset-x-0 bottom-0 z-100 mx-auto overflow-y-auto rounded-t-lg bg-white p-5 shadow-01"
            drag="y"
            dragConstraints={{ top: 0 }}
            dragElastic={0.2}
            initial="hidden"
            transition={{
                type: 'spring',
                damping: 40,
                stiffness: 400,
            }}
            variants={{
                visible: { y: 0 },
                hidden: { y: '100%' },
            }}
            onDragEnd={onDragEnd}
        >
            {children}
        </motion.div>
    );
});

export default BottomSheetContents;
