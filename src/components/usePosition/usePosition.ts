import { useCallback, useEffect, useState } from 'react';

interface Props {
    isVisible: boolean;
    inputId: string;
    listBoxId: string;
    totalLength: number;
}

const MAX_MENU_HEIGHT = 300;
const AVG_OPTION_HEIGHT = 24;
const MIN_OFFSET = 20;

const usePosition = ({ isVisible, inputId, listBoxId, totalLength }: Props) => {
    const [top, setTop] = useState(0);
    const [left, setLeft] = useState(0);
    const [marginTop, setMarginTop] = useState(1);
    const [maxWidth, setMaxWidth] = useState(300);

    // listbox가 페이지 범위를 넘어가는지 확인하는 함수
    // MIN_OFFSET : 메뉴가 페이지 하단에 너무 가깝지 않도록
    const isTop = useCallback(() => {
        const element = document.getElementById(inputId);
        if (element) {
            return (
                element.getBoundingClientRect().bottom +
                    Math.min(MAX_MENU_HEIGHT, totalLength * AVG_OPTION_HEIGHT) +
                    MIN_OFFSET >=
                window.innerHeight
            );
        }

        return false;
    }, [totalLength]);

    const handlePosition = useCallback(() => {
        const element = document.getElementById(inputId);
        const list = document.getElementById(listBoxId);

        if (isVisible && element && list) {
            const defaultTop = element.getBoundingClientRect().top;
            if (isTop()) {
                setTop(defaultTop - list.offsetHeight);
                setMarginTop(0);
            } else {
                setTop(1);
                setMarginTop(element.getBoundingClientRect().top + element.getBoundingClientRect().height - 1);
            }
            setLeft(element.getBoundingClientRect().x);
            setMaxWidth(element.getBoundingClientRect().width);
        }
    }, [isVisible]);

    useEffect(() => {
        handlePosition();
        window.addEventListener('resize', handlePosition);
        window.addEventListener('scroll', handlePosition);

        return () => {
            window.removeEventListener('resize', handlePosition);
            window.removeEventListener('scroll', handlePosition);
        };
    }, [handlePosition]);

    return { handlePosition, isTop, top, left, marginTop, maxWidth };
};

export default usePosition;
