export function getVariantStyle(variant = 'default') {
    switch (variant) {
        case 'error':
            return 'bg-[#ff2f2f] text-white';
        case 'info':
            return 'bg-[#3b82f6] text-white';
        case 'warning':
            return 'bg-[#eab308] text-black';
        case 'success':
            return 'bg-[#225cce] text-white';
        default:
            return 'bg-black text-white';
    }
}
