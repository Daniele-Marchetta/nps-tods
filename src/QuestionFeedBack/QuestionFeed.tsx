import { Box, Center, Flex, FormControl, Text, Textarea } from "@chakra-ui/react"
import { useState } from "react";

const QuestionFeed = () => {
    const handleChange= (e:any)=>{
        setValue(e.target.value)
    }
    const [value, setValue] = useState("dsa"); 
    return (
        <>
            <Box mx={10}>
                <Flex justifyContent={["flex-start", "flex-start", "center"]} my={24}>
                    <Text textAlign={"center"} as={"h1"} fontWeight={"bold"} fontSize={{ base: "20", md: "40px" }}>La sua opinione é importante ci spiegherebbe i motivi delle sue scelte?</Text>
                </Flex>
                <FormControl>
                    <Center>
                        <Textarea w={"85%"} value={value} onChange={handleChange} name="feedback" placeholder="..." height={250}></Textarea>
                    </Center>
                </FormControl>
            </Box>
        </>
    )
}

export default QuestionFeed