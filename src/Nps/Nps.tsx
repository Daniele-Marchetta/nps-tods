import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  Radio,
  RadioGroup,
  Text,
  useBoolean,
} from "@chakra-ui/react";


const LabelStyles = {
  width: { sm: "20px", md: "42px" },
  height: { sm: "20px", md: "42px" }
};


const Nps = ({ questions, answers, actual ,increment }: { questions: string[], answers: string[][], actual: number ,increment:any}) => {
  const [flag, setFlag] = useBoolean(true)
  const handleClick = () =>{
    increment(actual+1)
    setFlag.on()
  }
  return(
    <>
    {questions.map((q, index) => {
        return (
          <Box key={index} mx={10} display={questions[actual]===q?"-moz-initial":"none"}>
            <Flex justifyContent={["flex-start", "flex-start", "center"]} mt={{base:"1rem",md:"2rem",lg:"3rem"}} mb={{md:"3rem",lg:"4.2rem"}} >
        <Text  textAlign={"left"} as={"h1"} fontWeight={"bold"} fontSize={{ base: "20", md: "40px" }}>{q}</Text>
      </Flex>
      <Box height={"1px"} my={{base:"1.5rem",md:"3rem",lg:"4.2rem"}} bgColor={"black"} display={{base:"inherit",md:"none"}}  w={"20%"}>
      </Box>
            <FormControl  px={{ md: 20 }}>
        <RadioGroup onChange={setFlag.off} variant={"none"}  name={q} id={q} w={"full"} >
          <Flex direction={["column", "column", "row"]} alignItems={["flex-start", "flex-start", "center"]}  >
            {answers[index].map((answer, index) => {
              return (
                <Flex key={index} flexGrow={3}  flexDir={["row", "row", "column", "column", "column", "column"]} justifyContent={"center"} alignItems={"center"} gap={[2, 2, 5]}>
                  <Radio borderColor={"black"}  value={answer} _first={LabelStyles} _checked={{ "borderColor": "black", "borderWidth": "5px" }}  />
                  <Text fontSize={["18px", "18x", "18px","25px"]} maxW={{ md: "150px" }} wordBreak={"break-word"} alignItems={"center"} height={{ md: "48px" }} textAlign={{base:"left",md:"center"}} >
                    {answer}
                  </Text>
                </Flex>
              )
            })}
          </Flex>
        </RadioGroup>
        <Box my={{base:"2.5rem",md:"10rem"}}>
            <Center>
              <Button size={"lg"} isDisabled={flag} onClick={handleClick} type={"button"} mb={1} borderColor={"black"} px={9} py={5} variant={"outline"} rounded={"full"}  >{"Avanti"}</Button>
            </Center>
          </Box>
      </FormControl>
    </Box>
        )
      })}
    </>
    
      )
};

export default Nps;
