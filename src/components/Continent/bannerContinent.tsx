import { Flex, Heading } from "@chakra-ui/react";

interface BannerContinentProps {
    title: string;
    banner: string;
}

export function BannerContinent({ title, banner }) {
    return (
        <Flex
            bgImage={`${banner}`}
            bgRepeat="no-repeat"
            bgPosition={["center", "bottom"]}
            bgSize="cover"
            w="100%"
            h={["150px", "300px", "300px", "500px"]}
            alignItems={["center", "center", "center", "flex-end"]}
            justifyContent="center"
            px={["0", "0", "0", "4", "8"]}
        >
            
            <Heading
                width={1160}
                fontSize={["2.375rem", "3rem"]}
                color="white"
                py="16"
                textAlign={["center", "center", "center", "start"]}             
            > 
                {title}
            </Heading>
        </Flex>
    );
}