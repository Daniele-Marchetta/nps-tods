import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Slider,
  SliderFilledTrack,
  SliderTrack,
  SliderThumb,
  Image,
  SliderMark,
  Button
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import { Icon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import TodsSlider from "./TodsSlider"
import {  useState } from "react"
import Prova from "./Prova"


export const App = () => {
  const [value, setValue] = useState(0);



  return (

    <ChakraProvider theme={theme}>
      <Grid minH="100vh" px={0}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <TodsSlider totalSteps={10} currentStep={value}></TodsSlider>
        <Prova></Prova>
        <Button onClick={() => setValue(value<9?value+1:value)}>CIAO</Button>
        <Button onClick={() => setValue(0)}>RESET</Button>
      </Grid>
    </ChakraProvider>
  )
}
