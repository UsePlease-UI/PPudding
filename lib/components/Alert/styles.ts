import { joinClassNames } from '@utils/format';

export const getAlertVariantStyle = (variant = 'default') => {
  switch (variant) {
    case 'error':
      return joinClassNames('bg-[#ff2f2f] text-white');
    case 'info':
      return joinClassNames('bg-[#3b82f6] text-white');
    case 'warning':
      return joinClassNames('bg-[#eab308] text-black');
    case 'success':
      return joinClassNames('bg-[#225cce] text-white');
    default:
      return joinClassNames('bg-black text-white');
  }
};
