import { Accordion, AccordionHeader, AccordionPanel } from '@components/Accordion';
import { Box, Typography } from '@components/Base';

import { DismissFilled } from '@fluentui/react-icons';

export default function FAQ() {
    return (
        <Box height="h-full" width="w-full">
            <Typography component="h2" fontSize="text-40" fontWeight="font-bold" align="text-center" margin="mb-40">
                자주 묻는 질문들(FAQ)
            </Typography>
            <div className="space-y-5">
                <Accordion isExpanded>
                    <AccordionHeader>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</AccordionHeader>
                    <AccordionPanel>
                        Phasellus lacinia lacus at mi lobortis, a fringilla lectus maximus. Vestibulum id volutpat leo.
                        Nam eget ante non eros ultrices ultricies. Vivamus porta, ante non egestas fermentum, ante diam
                        ultrices est, non euismod purus urna eget mi. Praesent iaculis turpis tortor, eget semper magna
                        rutrum eu. Duis nibh tortor, finibus eget euismod at, gravida a diam. Cras vehicula ipsum at
                        odio efficitur, a commodo leo suscipit. Ut in nisi nisl. Etiam ex ligula, viverra non dui sed,
                        vestibulum fermentum felis.
                    </AccordionPanel>
                </Accordion>
                <Accordion>
                    <AccordionHeader>Proin id diam leo.</AccordionHeader>
                    <AccordionPanel>
                        Proin eget magna non nunc vehicula elementum. Vestibulum eget nulla at enim lacinia finibus
                        vitae sed libero. Nunc tempus pharetra quam ac finibus. Curabitur scelerisque ex eget massa
                        aliquet tincidunt quis sed sem. Praesent interdum vulputate quam non sodales. Proin vitae diam
                        porttitor lacus luctus ultrices eget nec elit. Aliquam vehicula magna sit amet ipsum sagittis
                        blandit et vel sapien.
                    </AccordionPanel>
                </Accordion>
                <Accordion>
                    <AccordionHeader>In hac habitasse platea dictumst.</AccordionHeader>
                    <AccordionPanel>
                        In hac habitasse platea dictumst. Ut velit elit, pulvinar sed ultricies sed, rhoncus ut orci.
                        Aenean id venenatis turpis, id aliquet mi. In finibus porta lacus, quis scelerisque massa
                        faucibus vel. Nullam egestas, nisi eget placerat malesuada, tellus orci tempus mi, iaculis
                        semper lectus leo quis orci. Sed massa libero, tincidunt nec pulvinar at, commodo vitae nisi.
                        Nullam volutpat felis nibh, eget fringilla sem volutpat eu. Sed vel libero nec lacus lacinia
                        convallis quis non leo. Duis convallis hendrerit leo, eu aliquet enim maximus vel. Pellentesque
                        sodales, arcu quis dictum consectetur, sem dolor tempus quam, ac sollicitudin massa neque et
                        nisl. Nullam vel elit sagittis elit consequat iaculis eu sit amet felis. Sed sed efficitur
                        dolor, vitae suscipit arcu.
                    </AccordionPanel>
                </Accordion>
                <Accordion>
                    <AccordionHeader>
                        Curabitur placerat placerat felis, ac vulputate nulla hendrerit vitae.
                    </AccordionHeader>
                    <AccordionPanel>
                        Curabitur placerat placerat felis, ac vulputate nulla hendrerit vitae. Vivamus ligula purus,
                        varius et leo ut, bibendum finibus turpis. Integer mollis, erat sit amet congue tincidunt,
                        libero libero pellentesque lectus, ut auctor sem arcu at turpis. Donec scelerisque ac ligula eu
                        gravida. Mauris rutrum iaculis lorem, id hendrerit mauris aliquet eu. Vestibulum interdum velit
                        nec mi condimentum, pellentesque ornare arcu venenatis. Phasellus posuere est et sem mollis
                        vestibulum.
                    </AccordionPanel>
                </Accordion>
                <Accordion isDisabled>
                    <AccordionHeader hasIcon icon={<DismissFilled />}>
                        Fusce accumsan felis in justo consequat, a commodo enim volutpat.
                    </AccordionHeader>
                    <AccordionPanel>
                        Fusce accumsan felis in justo consequat, a commodo enim volutpat. Etiam scelerisque libero sed
                        tellus ornare, at mollis enim condimentum. Suspendisse potenti. Nulla lacinia faucibus ligula,
                        non dictum odio ultrices hendrerit. Mauris eu lobortis elit. Fusce lacus ex, dignissim in eros
                        quis, vulputate mollis massa. Ut at malesuada ante, at malesuada dui. Curabitur et urna sit amet
                        mi varius iaculis a at diam. Praesent lobortis tempor dignissim. Cras a erat eget lorem
                        fermentum tincidunt in sed lacus.
                    </AccordionPanel>
                </Accordion>
            </div>
        </Box>
    );
}
