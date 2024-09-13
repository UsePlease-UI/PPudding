export function getPositionStyle(position?: string) {
  switch (position) {
    case 'top-right':
      return 'top-5 right-5';
    case 'top-left':
      return 'top-5 left-5';
    case 'top-center':
      return 'top-5 left-1/2 -translate-x-1/2';
    case 'bottom-left':
      return 'bottom-5 left-5';
    case 'bottom-center':
      return 'bottom-5 left-1/2 -translate-x-1/2';
    default:
      return 'bottom-5 right-5';
  }
}
