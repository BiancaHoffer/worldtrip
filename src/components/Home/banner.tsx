import { Flex, Text, Box, Image, useBreakpointValue, Spinner } from "@chakra-ui/react";
import { useRouter } from "next/router";

export function Banner() {
    const mobile = useBreakpointValue({
        base: false,
        md: true, 
    })
    return (
    <Flex
        backgroundImage="url('/images/background.jpg')"
        backgroundPosition={["100% 30%", "100% 30%"]}
        backgroundRepeat="no-repeat"
        w="100%"
        h={["163px", "335px"]}
        align="center"
        justifyContent="center"
        px="8"
    >
        <Flex
            w="100%"
            maxWidth="1160px"
            m="auto"
            align="center" 
            justify="space-between"
        >
           <Box w="524px">
                <Text 
                    fontSize={["1.25rem", "3xl", "2.25rem"]} 
                    fontWeight="500" 
                    color="white.200" 
                    pb="6"
                >
                    5 continentes, <br/> 
                    infinitas possibilidades.
                </Text>
                <Text 
                    fontSize={["0.875rem", "2xl", "1.25rem"]} 
                    color="gray.100"
                >
                    Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                </Text>
            </Box>
            
            {mobile === true ? (
                <Box 
                    position="relative" 
                    bottom="-70"
                >
                    <Image 
                        src="images/airplane.png" 
                        alt="avião" 
                        height="270.74" 
                        width="417.15"
                    />
                </Box>
            ) : (
                <div />
            )}
        </Flex>
    </Flex>
  );
}