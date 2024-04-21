import { Typography } from '@components/Base';

import useMobile from '@hooks/useMobile';

type HeadingType = {
    title: string;
};
const Heading = ({ title }: HeadingType) => {
    const { isTablet } = useMobile();

    return (
        <Typography
            component="h2"
            fontSize="text-24"
            fontWeight="font-black"
            color="text-primary-600"
            textTransform="uppercase"
            margin={isTablet ? 'mb-10' : 'mb-20'}
        >
            {title}
        </Typography>
    );
};

export default Heading;
