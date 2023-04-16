import { Center, Image, useColorMode } from "@chakra-ui/react"

const Header = () => {
    const { colorMode } = useColorMode()
    return (<Center >
        <Image src={colorMode==='light'?'/LogoHeader.png':'LogoHeaderWhite.png'} w={{ base: "125px", md: "269px" }} h={{ base: "35px", md: "76px" }} my={{ base: "2rem", md: 12 }}></Image>
    </Center>
    )
}
export default Header