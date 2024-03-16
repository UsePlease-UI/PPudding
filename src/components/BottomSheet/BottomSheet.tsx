/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, useEffect, useRef } from 'react';

import { motion, useAnimation } from 'framer-motion';

import useClickOutside from 'components/useClickOutside';

type BottomSheetType = {
    isCloseClickOutside?: boolean;
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
};

export default function BottomSheet({ isCloseClickOutside = false, isOpen, onClose, children }: BottomSheetType) {
    const controls = useAnimation();
    const sheetRef = useRef<HTMLDivElement | null>(null);

    if (isCloseClickOutside) useClickOutside(isOpen, () => onClose(), sheetRef);

    useEffect(() => {
        controls.start(isOpen ? 'visible' : 'hidden');
    }, [controls, isOpen]);

    const onDragEnd = (info: any) => {
        const shouldClose = info?.y > 20 || (info?.y >= 0 && info.point.y > 45);

        if (shouldClose) {
            controls.start('hidden');
            onClose();
        } else {
            controls.start('visible');
        }
    };

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
                    borderRadius: 8,
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
