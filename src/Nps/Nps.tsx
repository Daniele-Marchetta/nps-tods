import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  HStack,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";


const LabelStyles = {
  width: { sm: "20px", md: "42px" },
  height: { sm: "20px", md: "42px" }
};

const handleSubmit = (event:any)=>{
  event.preventDefault();
}

const Nps = ({ questions, answers, increment, actual }: { questions: string[], answers: string[][], increment: any, actual: number }) => {
  const [value, setValue] = useState("1");
  console.log(actual, questions.length)
  return (
    <>
    <form onSubmit={handleSubmit}>
        {questions.map((q, index) => {
          return (
            <Box mx={10} display={questions[actual]===q?"-moz-initial":"none"}>
              <Flex justifyContent={["flex-start", "flex-start", "center"]} mb={12}>
          <Text textAlign={"center"} as={"h1"} fontWeight={"bold"} fontSize={{ base: "20", md: "40px" }}>{q}</Text>
        </Flex>
        <FormControl isRequired px={{ md: 20 }} >
          <RadioGroup onChange={setValue} value={value} size={"lg"} >
            <Flex direction={["column", "column", "row"]} alignItems={["flex-start", "flex-start", "center"]}  >
              {answers[index].map((answer, index) => {
                return (
                  <Flex key={index} flexGrow={2} key={index} flexDir={["row", "row", "column", "column", "column", "column"]} justifyContent={"center"} alignItems={"center"} gap={[1, 1, 5]}>
                    <Radio borderColor={"black"} _first={LabelStyles} value="9" variant={"none"} _checked={{ "borderColor": "black", "borderWidth": "5px" }} />
                    <Text fontSize={["18px", "18x", "25px"]} maxW={{ md: "150px" }} wordBreak={"break-word"} alignItems={"center"} height={{ md: "48px" }} textAlign={"center"} >
                      {answer}
                    </Text>
                  </Flex>
                )
              })}
            </Flex>
          </RadioGroup>
        </FormControl>
      </Box>
          )
        })}
      <Box mt={20}>
        <Center>
          <Button type={actual === questions.length - 1 ? "submit" : "button"} mb={1} borderColor={"black"} px={9} py={5} variant={"outline"} rounded={"full"} onClick={() => increment((v:number)=>v<questions.length-1?v+1:v)}>{actual === questions.length - 1 ? "Invia" : "Avanti"}</Button>
        </Center>
        <Center visibility={actual === questions.length - 1 ? "visible" : "hidden"}>
          <Text cursor={"pointer"} display={"block"} as='u'>Salta e Invia</Text>
        </Center>
      </Box>
      </form>

    </>
  );
};

export default Nps;
