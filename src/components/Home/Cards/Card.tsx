import { Flex, Text, Image, Stack, useBreakpointValue, Box } from "@chakra-ui/react";

interface CardProps {
  icon: string;
  text: string;
}

export function Card({icon, text}: CardProps) {
  const mobile = useBreakpointValue({
    base: false,
    sm: true,
  })
  
  return (
      <Flex 
        direction={["row", "column"]} 
        alignItems="center" 
        justifyContent="center"
        pt={["2", "8"]}
      >
        {mobile === false ? 
          (
            <Flex
              h="8px"
              w="8px"
              backgroundColor="yellow.500"
              borderRadius="50%"
            />
          )
        :
          (
            <Image 
              src={`Icons/${icon}.svg`} 
              alt="card" 
              boxSize={['70px', "85px"]} 
            />
          )
        }
          
          <Text 
            p="1"
            pt={["0","8"]}
            fontWeight="600" 
            textColor="gray.500"
            fontSize={["1.125rem", "1.5rem"]}
          >
            {text}
          </Text>
      </Flex>
  );
} 