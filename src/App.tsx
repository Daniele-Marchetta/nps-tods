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
  Button,
  Center,
  useToast
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import { Icon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import TodsSlider from "./TodsSlider"
import { useState } from "react"
import Nps from "./Nps/Nps"
import logoHeader from "./logoHeader.png"
import QuestionFeed from "./QuestionFeedBack/QuestionFeed"
import TodsBeltSlider from "./TodsBeltSlider"


export const App = () => {
  const toast = useToast({
    position: 'top',
    title: 'Form inviato',
    colorScheme:"blackAlpha"
  })
  const [value, setValue] = useState(0);
  const [questions, setQuestions] = useState<string[]>(
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

  const [answers, setAnswers] = useState<string[][]>(
    [
      ["E' il mio primo acquisto", "1 anno", "1-2 anni", "3-5 anni", "Più di 6 anni"],
      ["Per niente soddisfatto", "2", "3", "4", "Pienamente soddisfatto"],
      ["1 - Per niente soddisfatto", "2", "3", "4", "5 - Pienamente soddisfatto"],
      ["1 - Per niente soddisfatto", "2", "3", "4", "5 - Pienamente soddisfatto"],
      ["1 - Per niente soddisfatto", "2", "3", "4", "5 - Pienamente soddisfatto", "Non ne ho usufruito"],
      ["1 - Per niente soddisfatto", "2", "3", "4", "5 - Pienamente soddisfatto"],
      ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
    ]
  )
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const updates = Object.fromEntries(formData);
    return  toast({
      description:JSON.stringify(updates)
    })
  }
  const changeValue = () => {
    if (value < questions.length) {
      setValue(value + 1)
      console.log("aumentato")
    }
  }
  console.log(value, questions.length)

  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher justifySelf="flex-end" />
      <Center>
        <Image src={logoHeader} w={{ base: "125px", md: "269px" }} h={{ base: "35px", md: "76px" }} my={12}></Image>
      </Center>
      <form onSubmit={handleSubmit}>
        {value < questions.length ?<TodsBeltSlider totalSteps={questions.length} currentStep={value} ></TodsBeltSlider> : null}
        <Nps questions={questions} answers={answers} actual={value} increment={setValue} ></Nps>
        {value < questions.length ? null : <><QuestionFeed></QuestionFeed>
          <Box mt={20}>
            <Center>
              <Button onClick={changeValue} type={"submit"} mb={1} borderColor={"black"} px={9} py={5} variant={"outline"} rounded={"full"}  >{"Invia"}</Button>
            </Center>
            <Center >
              <Text cursor={"pointer"} display={"block"} as='u'>Salta e Invia</Text>
            </Center>
          </Box></>}

      </form>
    </ChakraProvider>
  )
}
