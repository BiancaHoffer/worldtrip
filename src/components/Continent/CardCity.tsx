import { Flex, GridItem, Heading, Grid, Image, Text } from '@chakra-ui/react';

interface Card {
    imagecity: {
        url: string;
    };
    city: string;
    country: string;
    flag: {
        url: string;
    };
}

  interface CardCityProps {
    citys: Card[]
  }

export function CardCity({ citys }) {
    //console.log(citys)
    return (
    <>
    {citys.map(item => {
        return (
            <GridItem
                key={item.city}
                h="279px"
                w="256px"
                borderRadius="8"   
            >
                <Flex 
                    h="173px"
                    w="100%"
                    borderTopRadius="4"
                    bgImage={`url(${item.imagecity.url})`}
                    bgSize="110%"
                    bgRepeat="no-repeat"
                />

                <Grid
                    templateColumns={["repeat(2, 1fr)"]}
                    px="6"
                    border="1px"
                    borderBottomRadius="4"
                    borderTopColor="transparent"
                    borderBottomColor="yellow.500"
                    borderLeftColor="yellow.500"
                    borderRightColor="yellow.500"
                >
                    <GridItem>
                        <Heading
                            fontSize="1.25rem"
                            pt="4"
                            pb="2"
                        >
                            {item.city}
                        </Heading>
                    </GridItem>

                    <GridItem
                        rowSpan={2}
                    >
                        <Flex
                            w="100%"
                            h="100%"
                            justify="flex-end"
                            align="center"
                        >
                            <Image 
                                src={item.flag.url}
                                alt="imagem cidade"
                                borderRadius="50%"
                                w="30px"
                                h="30px"
                            />
                        </Flex>
                    </GridItem>
                    <GridItem>
                        <Text
                            fontSize="1rem"
                            color="gray.400"
                            pt="2"
                            pb="4"
                        >
                            {item.country}
                        </Text>
                    </GridItem>
                </Grid>
            </GridItem>
        )
    })}
    
    </>
  );
}