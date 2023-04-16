import {
  ChakraProvider,
  Box,
  Text,
  theme,
  Image,
  Button,
  Center,
  useToast
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { useState } from "react"
import Nps from "./Nps/Nps"
import QuestionFeed from "./QuestionFeedBack/QuestionFeed"
import TodsBeltSlider from "./TodsBeltSlider"


export const App = () => {
  const toast = useToast({
    position: 'top',
    title: 'Form inviato',
    isClosable: true,
    duration: 2000,
    status:"success"

  })
  const [value, setValue] = useState(0);
  const [questions] = useState<string[]>(
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

  const [answers] = useState<string[][]>(
    [
      ["E' il mio primo acquisto", "1 anno", "1-2 anni", "3-5 anni", "Più di 6 anni"],
      ["1 - Per niente soddisfatto", "2", "3", "4", "5 - Pienamente soddisfatto"],
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
    }
  }

  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher justifySelf="flex-end" />
      <Center>
        <Image src={'/logoHeader.png'} w={{ base: "125px", md: "269px" }} h={{ base: "35px", md: "76px" }} my={{base:"2rem",md:12}}></Image>
      </Center>
      <form onSubmit={handleSubmit}>
        {value < questions.length ?<TodsBeltSlider totalSteps={questions.length} currentStep={value} ></TodsBeltSlider> : null}
        <Nps questions={questions} answers={answers} actual={value} increment={setValue} ></Nps>
        {value < questions.length ? null : <><QuestionFeed></QuestionFeed>
          <Box mt={{base:"2.5rem",md:"8rem"}}>
            <Center>
              <Button size={"lg"} onClick={changeValue} type={"submit"} mb={1} borderColor={"black"} px={9} py={5} variant={"outline"} rounded={"full"}  >{"Invia"}</Button>
            </Center>
            <Center >
              <Text cursor={"pointer"} display={"block"} as='u'>Salta e Invia</Text>
            </Center>
          </Box></>}

      </form>
    </ChakraProvider>
  )
}
