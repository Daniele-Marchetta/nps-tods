import {
  Center,
  Flex,
  FormControl,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

const Question = () => {
  const [value, setValue] = useState("1");

  return (
    <>
      <Flex justifyContent={["flex-start","flex-start","center"]}>
        <Text as={"h1"} fontWeight={"bold"} fontSize={"xl"}>Da quanto tempo é cliente Tods ?</Text>
      </Flex>
      <FormControl>
        <RadioGroup onChange={setValue} value={value} size={"lg"} >
          <Flex direction={["column","column","row"]} justifyContent={"center"}  gap={[2,2,40]} alignItems={["flex-start","flex-start" ,"center"]}  >
            <Flex flexDir={["row","row","column","column","column","column"]} justifyContent={"center"} alignItems={"center"} gap={1}>
              <Radio  value="1"  variant={"none"} _checked={{"borderColor" : "black" ,"borderWidth":"5px"}}/>
              <Text>Vesuvio</Text>
            </Flex>
            <Flex flexDir={["row","row","column","column","column","column"]} justifyContent={"center"} alignItems={"center"} gap={1}>
              <Radio  value="2"  variant={"none"} _checked={{"borderColor" : "black" ,"borderWidth":"5px"}}/>
              <Text>erutta</Text>
            </Flex>
            <Flex flexDir={["row","row","column","column","column","column"]} justifyContent={"center"} alignItems={"center"} gap={1}>
              <Radio  value="3"  variant={"none"} _checked={{"borderColor" : "black" ,"borderWidth":"5px"}}/>
              <Text>napoli</Text>
            </Flex>
            <Flex flexDir={["row","row","column","column","column","column"]} justifyContent={"center"} alignItems={"center"} gap={1}>
              <Radio  value="3"  variant={"none"} _checked={{"borderColor" : "black" ,"borderWidth":"5px"}}/>
              <Text>napoli</Text>
            </Flex>
            <Flex flexDir={["row","row","column","column","column","column"]} justifyContent={"center"} alignItems={"center"} gap={1}>
              <Radio  value="3"  variant={"none"} _checked={{"borderColor" : "black" ,"borderWidth":"5px"}}/>
              <Text>napoli</Text>
            </Flex>
          </Flex>
        </RadioGroup>
      </FormControl>
    </>
  );
};

export default Question;
