import { Box, Slider, SliderMark, SliderThumb, SliderTrack, Image, Center } from '@chakra-ui/react';

const TodsBeltSlider = ({ totalSteps, currentStep }: { totalSteps: number, currentStep: number }) => {
    const singleStep = 100 / (totalSteps - 1)

    return (
        <Box bgImage="url('https://i.imgur.com/OTARJZv.png')" w={"full"} bgPosition={"center"} bgSize={{ base: "auto 550px", md: "auto 1300px" }}   >
            <Center px={["5rem","5rem","7rem","10rem","15rem"]} h={"full"}    >
                <Slider step={singleStep} value={(currentStep) * singleStep}  >
                    {Array.from({ length: totalSteps }).map((_, index) => {
                        return (
                            <SliderMark value={(singleStep * index)} key={index} ml={["-0.39rem"]} mt={{ base: "-7px", md: "-2.5" }} width={{ base: "10px", md: "15px" }} height={{ base: "12px", md: "17px" }}  >
                                <Image w={"full"} src={'/buco.png'}></Image>
                            </SliderMark>
                        )
                    }
                    )
                    }
                    <SliderTrack bgColor={"black"} h={"fit-content"}>
                    </SliderTrack>
                    <SliderThumb width={"fit-content"} _focus={{ boxShadow: "none" }} boxSize={{ base: 65, md: 150 }} background={"transparent"} border={"none"} boxShadow={"none"}>
                        <Image  src={'/todsLogo.png'} zIndex={9}></Image>
                    </SliderThumb>
                </Slider>
            </Center>
        </Box>
    );
}
export default TodsBeltSlider