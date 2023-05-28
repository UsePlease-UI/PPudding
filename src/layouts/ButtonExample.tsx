import Button from 'components/atoms/Button';
import FlexBox from 'components/atoms/FlexBox';

import { ChevronDownIcon } from 'assets/icons';

export default function ButtonExample() {
    return (
        <FlexBox direction="column" gap={10}>
            <FlexBox direction="column" alignItems="flex-start" justifyContent="center" gap={10}>
                <h3>Outlined</h3>
                <FlexBox gap={5}>
                    <Button size="small">버튼</Button>
                    <Button size="medium">버튼</Button>
                    <Button>버튼</Button>
                </FlexBox>
                <FlexBox gap={5}>
                    <Button size="small" hasStartIcon icon={<ChevronDownIcon />}>
                        아이콘 버튼 1
                    </Button>
                    <Button size="medium" hasStartIcon icon={<ChevronDownIcon />}>
                        아이콘 버튼 2
                    </Button>
                    <Button hasStartIcon icon={<ChevronDownIcon />}>
                        아이콘 버튼 1
                    </Button>
                </FlexBox>
                <FlexBox gap={5}>
                    <Button size="small" hasEndIcon icon={<ChevronDownIcon />}>
                        아이콘 버튼 1
                    </Button>
                    <Button size="medium" hasEndIcon icon={<ChevronDownIcon />}>
                        아이콘 버튼 2
                    </Button>
                    <Button hasEndIcon icon={<ChevronDownIcon />}>
                        아이콘 버튼 1
                    </Button>
                </FlexBox>
            </FlexBox>
            <FlexBox direction="column" alignItems="flex-start" justifyContent="center" gap={10}>
                <h3>Contained</h3>
                <FlexBox gap={5}>
                    <Button size="small" variant="contained">
                        버튼
                    </Button>
                    <Button size="medium" variant="contained">
                        버튼
                    </Button>
                    <Button variant="contained">버튼</Button>
                </FlexBox>
                <FlexBox gap={5}>
                    <Button size="small" variant="contained" hasStartIcon icon={<ChevronDownIcon />}>
                        아이콘 버튼 1
                    </Button>
                    <Button size="medium" variant="contained" hasStartIcon icon={<ChevronDownIcon />}>
                        아이콘 버튼 2
                    </Button>
                    <Button variant="contained" hasStartIcon icon={<ChevronDownIcon />}>
                        아이콘 버튼 1
                    </Button>
                </FlexBox>
                <FlexBox gap={5}>
                    <Button size="small" variant="contained" hasEndIcon icon={<ChevronDownIcon />}>
                        아이콘 버튼 1
                    </Button>
                    <Button size="medium" variant="contained" hasEndIcon icon={<ChevronDownIcon />}>
                        아이콘 버튼 2
                    </Button>
                    <Button variant="contained" hasEndIcon icon={<ChevronDownIcon />}>
                        아이콘 버튼 1
                    </Button>
                </FlexBox>
            </FlexBox>
            <FlexBox direction="column" alignItems="flex-start" justifyContent="center" gap={10}>
                <h3>Text</h3>
                <FlexBox gap={5}>
                    <Button size="small" variant="text">
                        버튼
                    </Button>
                    <Button size="medium" variant="text">
                        버튼
                    </Button>
                    <Button variant="text">버튼</Button>
                </FlexBox>
                <FlexBox gap={5}>
                    <Button size="small" variant="text" hasStartIcon icon={<ChevronDownIcon />}>
                        아이콘 버튼 1
                    </Button>
                    <Button size="medium" variant="text" hasStartIcon icon={<ChevronDownIcon />}>
                        아이콘 버튼 2
                    </Button>
                    <Button variant="text" hasStartIcon icon={<ChevronDownIcon />}>
                        아이콘 버튼 1
                    </Button>
                </FlexBox>
                <FlexBox gap={5}>
                    <Button size="small" variant="text" hasEndIcon icon={<ChevronDownIcon />}>
                        아이콘 버튼 1
                    </Button>
                    <Button size="medium" variant="text" hasEndIcon icon={<ChevronDownIcon />}>
                        아이콘 버튼 2
                    </Button>
                    <Button variant="text" hasEndIcon icon={<ChevronDownIcon />}>
                        아이콘 버튼 1
                    </Button>
                </FlexBox>
            </FlexBox>
        </FlexBox>
    );
}
