import { Box, Center, Flex, FormControl, Text, Textarea } from "@chakra-ui/react"
import { useState } from "react";

const QuestionFeed = () => {
    const handleChange= (e:any)=>{
        setValue(e.target.value)
    }
    const [value, setValue] = useState(""); 
    return (
        <>
            <Box mx={10}>
                <Flex justifyContent={["flex-start", "flex-start", "center"]} mt={{base:"1rem",md:"2rem",lg:"3rem"}} mb={{base:"1.5rem",md:"3rem",lg:"4.2rem"}}>
                    <Text textAlign={"center"} as={"h1"} fontWeight={"bold"} fontSize={{ base: "20", md: "35px" }}>La sua opinione é importante ci spiegherebbe i motivi delle sue scelte?</Text>
                </Flex>
                <FormControl>
                    <Center>
                        <Textarea w={"85%"} value={value} onChange={handleChange} name="feedback" placeholder="..." height={250} mt={{base:"1rem",md:"2.5rem"}}></Textarea>
                    </Center>
                </FormControl>
            </Box>
        </>
    )
}

export default QuestionFeed