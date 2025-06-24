import { ButtonVariantType } from '@components/Button';

export const getActiveVariant = (isActive: boolean, variant: ButtonVariantType) => {
  let activeVariant = 'outlined';
  if (variant === 'text') {
    activeVariant = 'text';
  } else if ((variant === 'contained' && !isActive) || (variant === 'outlined' && isActive)) {
    activeVariant = 'contained';
  }
  return activeVariant as ButtonVariantType;
};
