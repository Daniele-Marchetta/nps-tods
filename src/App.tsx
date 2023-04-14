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
import Nps from "./Nps/Nps"


export const App = () => {
  const [value, setValue] = useState(0);
  const [questions,setQuestions]= useState<string[]>(
    [
      "Da quanto tempo é cliente Tods ?",
      "Come valuterebbe i seguenti servizi della nostra boutique online?",
      "Descrizioni ed immagini di prodotto",
      "Facilità di acquisto",
      "Assistenza all'acquisto / Servizio Clienti ",
      "Spedizione & Packaging",
      "Consiglieresti un prodotto Tod's ad un amico?"
    ]
  )

  const [answers,setAnswers]= useState<string[][]>(
    [
      ["E' il mio primo acquisto","1 anno","1-2 anni","3-5 anni","Più di 6 anni"],
      ["Per niente soddisfatto","2","3","4","Pienamente soddisfatto"],
      ["1 - Per niente soddisfatto","2","3","4","5 - Pienamente soddisfatto"],
      ["1 - Per niente soddisfatto","2","3","4","5 - Pienamente soddisfatto"],
      ["1 - Per niente soddisfatto","2","3","4","5 - Pienamente soddisfatto","Non ne ho usufruito"],
      ["1 - Per niente soddisfatto","2","3","4","5 - Pienamente soddisfatto"],
      ["1","2","3","4","5","6","7","8","9","10"]
    ]
    )

  return (

    <ChakraProvider theme={theme}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <TodsSlider totalSteps={questions.length} currentStep={value}></TodsSlider>
        <Nps questions={questions} answers={answers} actual={value} increment={setValue}></Nps>
        <Box mt={50}>
        <Button onClick={() => setValue(value<questions.length-1?value+1:value)}>CIAO</Button>
        <Button onClick={() => setValue(0)}>RESET</Button>
        </Box>
    </ChakraProvider>
  )
}
