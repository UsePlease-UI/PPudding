export const POPOVER_SHORT= `
    <FlexBox direction="column" gap={10}>
        <h2>PopOver</h2>
        <button type="button" onClick={handleOpen} css={popoverStyle} ref={buttonRef}>
            click me
        </button>
        <PopOver isOpen={isOpen}>
            <div>The contents of the Popover</div>
        </PopOver>
    </FlexBox>
`;

export const POPOVER_CODE_SNIPPET = `
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const isOpen = Boolean(anchorEl);

    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const handleOpen = (e: React.MouseEvent<HTMLElement>) => {
        if (anchorEl) {
            setAnchorEl(null);
            document.body.style.overflow = 'auto';
        } else {
            setAnchorEl(e.currentTarget);
            document.body.style.overflow = 'hidden';
        }
    };

    const handleClose = () => setAnchorEl(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (isOpen && !buttonRef.current?.contains(event.target as Node)) {
                handleClose();
                document.body.style.overflow = 'auto';
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <FlexBox direction="column" gap={10}>
            <h2>PopOver</h2>
            <button type="button" onClick={handleOpen} css={popoverStyle} ref={buttonRef}>
                click me
            </button>
            <PopOver isOpen={isOpen}>
                <div>The contents of the Popover</div>
            </PopOver>
        </FlexBox>
    );
`;
