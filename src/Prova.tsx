import { Box, Slider, SliderMark, SliderThumb, SliderTrack, Image, Flex, Center } from '@chakra-ui/react';
import todslogo1 from "./todslogo.png"
import buco from "./buco.png"
import todsBelt from "./todsBelt.png"

const Prova = () => {
    return (
        <Box bgImage="url('https://i.imgur.com/OTARJZv.png')" w={"full"} bgPosition={"center"} >
            <Center px={20} h={"full"}  >
                <Slider  defaultValue={25}  >
                    <SliderMark value={25} ml={-3} mt={"-2.5"} width={"15px"} height={"17px"}  >
                        <Image w={"full"} src={buco}></Image>
                    </SliderMark>
                    <SliderMark value={50} ml={-3} mt={"-2.5"} width={"15px"} height={"17px"} >
                        <Image w={"full"} src={buco}></Image>
                    </SliderMark>
               
                    <SliderTrack bgColor={"black"} h={"fit-content"}>

                    </SliderTrack>

                    <SliderThumb _focus={{ boxShadow: "none" }} boxSize={130} background={"transparent"} border={"none"} boxShadow={"none"}>
                        <Image src={todslogo1} zIndex={9}></Image>
                    </SliderThumb>
                </Slider>
            </Center>

        </Box>
    );
}
export default Prova