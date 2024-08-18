import { VariantType } from '@components/Button/styles';

export function getActiveVariant(isActive: boolean, variant: VariantType) {
    let activeVariant = 'outlined';
    if (variant === 'text') {
        activeVariant = 'text';
    } else if ((variant === 'contained' && !isActive) || (variant === 'outlined' && isActive)) {
        activeVariant = 'contained';
    }
    return activeVariant as VariantType;
}
