import { joinClassNames } from '@utils/format';

export interface FocusOverlayType {
  className?: string;
  isDimmed?: boolean;
}

export default function FocusOverlay(props: FocusOverlayType) {
  const { className, isDimmed } = props;

  return (
    <div
      aria-hidden="true"
      role="presentation"
      className={joinClassNames(
        'fixed bottom-0 left-0 right-0 top-0 select-none',
        isDimmed && 'bg-black/10',
        className && className,
      )}
    />
  );
}
