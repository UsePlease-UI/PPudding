import { ReactNode, forwardRef, useEffect } from 'react';

import { motion, useAnimation, PanInfo } from 'framer-motion';

export type BottomSheetContentsType = {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
};

const BottomSheetChildren = forwardRef<HTMLDivElement, BottomSheetContentsType>(function BottomSheetChildren(
    { isOpen, onClose, children },
    ref
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
            drag="y"
            initial="hidden"
            animate={controls}
            onDragEnd={onDragEnd}
            variants={{
                visible: { y: 0 },
                hidden: { y: '100%' }
            }}
            transition={{
                type: 'spring',
                damping: 40,
                stiffness: 400
            }}
            dragConstraints={{ top: 0 }}
            dragElastic={0.2}
            className="fixed bottom-0 left-0 right-0 z-100 mx-auto overflow-y-auto rounded-t-lg bg-white p-20 shadow-01"
        >
            {children}
        </motion.div>
    );
});

export default BottomSheetChildren;
