import { useEffect, useState } from 'react';

const TABLET_WIDTH = 768;
const MOBILE_WIDTH = 320;

const useMobile = () => {
    const [isTablet, setIsTablet] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (window.innerWidth <= MOBILE_WIDTH) {
            setIsMobile(true);
            setIsTablet(true);
        } else if (window.innerWidth <= TABLET_WIDTH) {
            setIsTablet(true);
        } else {
            setIsTablet(false);
            setIsMobile(false);
        }
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= MOBILE_WIDTH) {
                setIsMobile(true);
            } else if (window.innerWidth <= TABLET_WIDTH) {
                setIsTablet(true);
            } else {
                setIsTablet(false);
                setIsMobile(false);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return { isMobile, isTablet };
};

export default useMobile;
