import { Box, Slider, SliderMark, SliderThumb, SliderTrack, Image, Flex } from '@chakra-ui/react';
import todslogo1 from "./todslogo.png"
import buco from "./buco.png"
import todsBelt from "./todsBelt.png"
import { useEffect } from 'react';

function TodsSlider({ totalSteps, currentStep }: { totalSteps: number, currentStep: number }) {
  useEffect(() => {
   console.log("renderizzato")
  }, [])
  console.log("ciao")
  const singleStep = 100 / (totalSteps - 1)
  return (
    <Flex justifyContent={"center"} alignContent={"center"} h={"fit-content"}  bgImage={`url(${todsBelt})`}   overflow={"hidden"}  bgPosition={"center"} >
      <Box w={"full"} maxW={["400px", "600px", "700px", "900px", "1200px", "1440"]} px={[5, 10, 15, 20, 20]}  >
        <Slider aria-label='slider-ex-4' step={singleStep} value={(currentStep) * singleStep}
        >
          {Array.from({ length: totalSteps }).map((_, index) => {
            return (
              <SliderMark value={(singleStep * index)} key={index} zIndex={1} ml={-3} mt={-2} width={"15px"} height={"17px"}  >
                <Image w={"full"} src={buco}></Image>
              </SliderMark>
            )
          }
          )
          }
          <Box px={50}>
            <SliderTrack h={100} background="transparent ">
            </SliderTrack>
          </Box>
          <SliderThumb _focus={{ boxShadow: "none" }} boxSize={140} background={"transparent"} border={"none"} boxShadow={"none"}>
            <Image  src={todslogo1} zIndex={9}></Image>
          </SliderThumb>
        </Slider>
      </Box>
    </Flex>
  );
}

export default TodsSlider;
