import { useEffect } from 'react';

export default function useClickOutside<T extends HTMLElement>(
    isOpen: boolean,
    handleClose: () => void,
    ref: React.RefObject<T>
) {
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (isOpen && ref.current && !ref.current.contains(event.target as Node)) {
                handleClose();
            }
        }

        function handleEscapeKey(event: KeyboardEvent) {
            if (isOpen && event.key === 'Escape') {
                handleClose();
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscapeKey);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, [isOpen, handleClose, ref]);
}
