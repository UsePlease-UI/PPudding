import FlexBox from '@atoms/FlexBox';
import Typography from '@atoms/Typography';
import Button from '@molecules/Button';

import { StarIcon } from '@heroicons/react/24/outline';

export default function ButtonExample() {
    return (
        <FlexBox direction="column" gap={10}>
            <FlexBox direction="column" alignItems="flex-start" justifyContent="center" gap={10}>
                <Typography component="h3">Outlined</Typography>
                <FlexBox gap={5}>
                    <Button size="small" variant="outlined">
                        버튼
                    </Button>
                    <Button size="medium" variant="outlined">
                        버튼
                    </Button>
                    <Button size="large" variant="outlined">
                        버튼
                    </Button>
                </FlexBox>
                <FlexBox gap={5}>
                    <Button size="small" variant="outlined" hasStartIcon icon={<StarIcon />}>
                        아이콘 버튼 1
                    </Button>
                    <Button size="medium" variant="outlined" hasStartIcon icon={<StarIcon />}>
                        아이콘 버튼 2
                    </Button>
                    <Button size="large" variant="outlined" hasStartIcon icon={<StarIcon />}>
                        아이콘 버튼 1
                    </Button>
                </FlexBox>
                <FlexBox gap={5}>
                    <Button size="small" variant="outlined" hasEndIcon icon={<StarIcon />}>
                        아이콘 버튼 1
                    </Button>
                    <Button size="medium" variant="outlined" hasEndIcon icon={<StarIcon />}>
                        아이콘 버튼 2
                    </Button>
                    <Button size="large" variant="outlined" hasEndIcon icon={<StarIcon />}>
                        아이콘 버튼 1
                    </Button>
                </FlexBox>
            </FlexBox>
            <FlexBox direction="column" alignItems="flex-start" justifyContent="center" gap={10}>
                <Typography component="h3">Contained</Typography>
                <FlexBox gap={5}>
                    <Button size="small" variant="contained">
                        버튼
                    </Button>
                    <Button size="medium" variant="contained">
                        버튼
                    </Button>
                    <Button size="large" variant="contained">
                        버튼
                    </Button>
                </FlexBox>
                <FlexBox gap={5}>
                    <Button size="small" variant="contained" hasStartIcon icon={<StarIcon />}>
                        아이콘 버튼 1
                    </Button>
                    <Button size="medium" variant="contained" hasStartIcon icon={<StarIcon />}>
                        아이콘 버튼 2
                    </Button>
                    <Button size="large" variant="contained" hasStartIcon icon={<StarIcon />}>
                        아이콘 버튼 1
                    </Button>
                </FlexBox>
                <FlexBox gap={5}>
                    <Button size="small" variant="contained" hasEndIcon icon={<StarIcon />}>
                        아이콘 버튼 1
                    </Button>
                    <Button size="medium" variant="contained" hasEndIcon icon={<StarIcon />}>
                        아이콘 버튼 2
                    </Button>
                    <Button size="large" variant="contained" hasEndIcon icon={<StarIcon />}>
                        아이콘 버튼 1
                    </Button>
                </FlexBox>
            </FlexBox>
            <FlexBox direction="column" alignItems="flex-start" justifyContent="center" gap={10}>
                <Typography component="h3">Text</Typography>
                <FlexBox gap={5}>
                    <Button size="small" variant="text">
                        버튼
                    </Button>
                    <Button size="medium" variant="text">
                        버튼
                    </Button>
                    <Button size="large" variant="text">
                        버튼
                    </Button>
                </FlexBox>
                <FlexBox gap={5}>
                    <Button size="small" variant="text" hasStartIcon icon={<StarIcon />}>
                        아이콘 버튼 1
                    </Button>
                    <Button size="medium" variant="text" hasStartIcon icon={<StarIcon />}>
                        아이콘 버튼 2
                    </Button>
                    <Button size="large" variant="text" hasStartIcon icon={<StarIcon />}>
                        아이콘 버튼 1
                    </Button>
                </FlexBox>
                <FlexBox gap={5}>
                    <Button size="small" variant="text" hasEndIcon icon={<StarIcon />}>
                        아이콘 버튼 1
                    </Button>
                    <Button size="medium" variant="text" hasEndIcon icon={<StarIcon />}>
                        아이콘 버튼 2
                    </Button>
                    <Button size="large" variant="text" hasEndIcon icon={<StarIcon />}>
                        아이콘 버튼 1
                    </Button>
                </FlexBox>
            </FlexBox>
        </FlexBox>
    );
}
