import { Flex, GridItem, Text, Tooltip, Image } from "@chakra-ui/react";

export function InfosContinent({ infos }) {
  return (
    <>
      <GridItem
        m="auto"
        fontSize={["0.875rem", "1.5rem"]}
        fontWeight={["500", "600"]}
      >
        <Flex 
          w="100%"
          justify="space-between"
          fontSize={["0.875rem", "1.5rem"]}
          fontWeight={["500", "600"]}
          mr={["16","16","16","16", "20"]}
      >
          {infos.map(i => {
            return (
              <Flex 
                key={i.info} 
                direction="column"
                justify="center"
                align="center"
              >
              <Text
                color="yellow.500"
                fontSize={["2rem", "3rem"]}
              >
                {i.number}
              </Text>
              <Flex 
                alignItems="center" 
                justifyContent="center"
              >
                <Text>{i.info}</Text>

                {i.boolean === true ?
                  <Tooltip 
                    label={i.morecitys} 
                    aria-label="hy"
                    bgColor="gray.400"
                    p="2"
                  >
                    <Image 
                      src="/icons/info.svg" 
                      alt=""
                      h={["10px", "16px"]}
                      w={["10px", "16px"]}
                      m="1"
                    />
                    
                  </Tooltip>   
                :
                  <></>
                }
              </Flex>
            </Flex>
          )
        })}
      </Flex>  
    </GridItem>  
  </>
  );
}