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

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, handleClose, ref]);
}
