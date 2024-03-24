import { ReactNode, useEffect, useRef } from 'react';

import { motion, useAnimation, PanInfo } from 'framer-motion';

export type BottomSheetChildrenType = {
    onClose: () => void;
    children: ReactNode;
};

export default function BottomSheetChildren({ onClose, children }: BottomSheetChildrenType) {
    const controls = useAnimation();
    const sheetRef = useRef<HTMLDivElement | null>(null);

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
        controls.start('visible');
    }, [controls]);

    return (
        <div ref={sheetRef}>
            <motion.div
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
                style={{
                    position: 'fixed',
                    zIndex: 10,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    borderRadius: '8px 8px 0 0',
                    background: '#fff',
                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.6)',
                    margin: ' 0 auto',
                    overflow: 'auto',
                    padding: '20px'
                }}
            >
                {children}
            </motion.div>
        </div>
    );
}
