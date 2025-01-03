import { ReactNode } from '../../../node_modules/react';
import { AlertOptionsType } from '../useAlert';
export interface AlertType {
    message: string;
    onClose: () => void;
    icon?: ReactNode;
    options?: AlertOptionsType;
}
export default function Alert({ icon, message, onClose, options }: AlertType): import("react/jsx-runtime").JSX.Element;
