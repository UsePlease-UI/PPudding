import { joinClassNames } from '@utils/format';

type OrientationType = 'vertical' | 'horizontal';

type DividerType = {
    width?: string;
    height?: string;
    margin?: string;
    backgroundColor?: string;
    borderRadius?: string;
    orientation?: OrientationType;
};

function getOrientationStyle(orientation?: OrientationType) {
    if (orientation === 'vertical') {
        return 'h-auto w-px self-stretch flex-shrink-0 mx-20';
    }
    return 'w-full h-px my-20';
}

/**
 *  [Base Component] Divider
 *  @param width [TailwindCSS] Width
 *  @param height [TailwindCSS] Height
 *  @param margin [TailwindCSS] Margin
 *  @param borderRadius [TailwindCSS] Border Radius
 *  @param backgroundColor [TailwindCSS] Background Color
 *  @param orientation horizontal | vertical (default: horizontal)
 *  @returns JSX.Element
 */
export default function Divider(props: DividerType) {
    const { width, height, margin, backgroundColor = 'bg-gray-600', borderRadius, orientation } = props;

    return (
        <div
            className={joinClassNames(
                getOrientationStyle(orientation),
                width,
                height,
                margin,
                backgroundColor,
                borderRadius
            )}
        />
    );
}
