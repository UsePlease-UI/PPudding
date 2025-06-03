import { ReactNode } from '../../../node_modules/react';
import { ButtonShapeType, ButtonSizeType, ButtonVariantType } from '../Button/styles';
export interface SharedPaginationType {
    className?: string;
    itemsPerPage?: number;
    pageRange?: number;
    selectedPage?: number;
    shape?: ButtonShapeType;
    size?: ButtonSizeType;
    variant?: ButtonVariantType;
    firstIcon?: ReactNode;
    hasFirstIcon?: boolean;
    hasLastIcon?: boolean;
    lastIcon?: ReactNode;
    nextIcon?: ReactNode;
    onChange?: (newPage: number) => void;
    prevIcon?: ReactNode;
    totalCount?: number;
}
export default function SharedPagination(props: SharedPaginationType): import("react/jsx-runtime").JSX.Element;
