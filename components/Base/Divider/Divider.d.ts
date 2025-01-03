import { HTMLAttributes } from '../../../../node_modules/react';
import { DividerOrientationType } from './styles';
export interface DividerType extends HTMLAttributes<HTMLHRElement> {
    className?: string;
    orientation?: DividerOrientationType;
}
export default function Divider(props: DividerType): import("react/jsx-runtime").JSX.Element;
