import { VariantType } from '../styles';

const style = {
    outlined: 'border border-primary-600 bg-white',
    contained: 'border border-primary-100 bg-primary-100',
    text: 'border-[0.3px] border-gray-200 bg-white'
};

export const getVariantStyle = (variant?: VariantType) => {
    return variant ? style[variant] : style.outlined;
};
