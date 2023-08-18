/** @jsxImportSource @emotion/react */
import Button from 'components/Button/Button';

import palette from 'styles/palette';

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
                height: 40,
                textTransform: 'uppercase',
                fontWeight: 600,
                borderRadius: 4,
                border: '1px dashed #ffffff',
                color: selected === name ? palette.secondary.main : '#ffffff',
                background: selected === name ? palette.lightBlue.main : palette.secondary.main,
                '&:hover': { opacity: 0.6 }
            }}
            onClick={onClick}
        >
            {children}
        </Button>
    );
}
