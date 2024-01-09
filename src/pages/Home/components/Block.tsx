/** @jsxImportSource @emotion/react */
import palette from 'styles/palette';

import Button from 'components/Button/Button';

type BlockType = {
    children: React.ReactNode;
    name: string;
    selected: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Block({ children, name, onClick, selected }: BlockType) {
    return (
        <Button
            type="button"
            value={name}
            customCSS={{
                flex: 'none',
                height: 40,
                textTransform: 'uppercase',
                fontWeight: 600,
                borderRadius: 4,
                border: `1px dashed ${palette.neutral.white}`,
                color: selected === name ? palette.secondary[600] : palette.neutral.white,
                background: selected === name ? palette.tertiary[400] : palette.secondary[600],
                '&:hover': { opacity: 0.6 }
            }}
            onClick={onClick}
        >
            {children}
        </Button>
    );
}
