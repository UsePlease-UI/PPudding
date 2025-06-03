import { MouseEvent } from '../../../node_modules/react';
declare const usePopover: () => {
    anchorElement: HTMLElement | null;
    handleClose: () => void;
    handleOpen: (e: MouseEvent<HTMLElement>) => void;
    isOpen: boolean;
};
export default usePopover;
