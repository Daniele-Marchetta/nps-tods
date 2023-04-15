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
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";


const LabelStyles = {
  width: { sm: "20px", md: "42px" },
  height: { sm: "20px", md: "42px" }
};

const handleSubmit = (event:any)=>{
  event.preventDefault();
  const formData = new FormData(event.target);
  const updates = Object.fromEntries(formData);
  console.log(updates)
}

const Nps = ({ questions, answers, actual ,increment }: { questions: string[], answers: string[][], actual: number ,increment:any}) => {
  return(
    <>
    {questions.map((q, index) => {
        return (
          <Box key={index} mx={10} display={questions[actual]===q?"-moz-initial":"none"}>
            <Flex justifyContent={["flex-start", "flex-start", "center"]} my={"2.5rem"}>
        <Text py={5} textAlign={"center"} as={"h1"} fontWeight={"bold"} fontSize={{ base: "20", md: "40px" }}>{q}</Text>
      </Flex>
      <FormControl  px={{ md: 20 }}>
        <RadioGroup  variant={"none"}  name={q} id={q} w={"full"} >
          <Flex direction={["column", "column", "row"]} alignItems={["flex-start", "flex-start", "center"]}  >
            {answers[index].map((answer, index) => {
              return (
                <Flex key={index} flexGrow={3}  flexDir={["row", "row", "column", "column", "column", "column"]} justifyContent={"center"} alignItems={"center"} gap={[1, 1, 5]}>
                  <Radio borderColor={"black"}  value={answer} _first={LabelStyles} _checked={{ "borderColor": "black", "borderWidth": "5px" }}  />
                  <Text fontSize={["18px", "18x", "18px","25px"]} maxW={{ md: "150px" }} wordBreak={"break-word"} alignItems={"center"} height={{ md: "48px" }} textAlign={"center"} >
                    {answer}
                  </Text>
                </Flex>
              )
            })}
          </Flex>
        </RadioGroup>
        <Box mt={20}>
            <Center>
              <Button onClick={()=>increment(actual+1)} type={"button"} mb={1} borderColor={"black"} px={9} py={5} variant={"outline"} rounded={"full"}  >{"Avanti"}</Button>
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
