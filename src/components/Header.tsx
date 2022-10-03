import Link from "next/link";
import { Flex, Image, Grid, Icon } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import { FiChevronLeft } from "react-icons/fi";

interface ButtonProps {
  label?: string;
  icon?: ReactElement;
  cursor?: string;
}

export function Header({ cursor, label, icon,...rest }: ButtonProps) {
  const { pathname } = useRouter();
  const notHomePage = pathname !== "/"

  return (
    <Flex 
      as="header" 
      w="100%" 
      h={["50px", "100px"]}
      justify="center" 
      align="center"
      backgroundColor="white"
    >
      <Grid
        w="100%"
        h="100%"
        mx={["4", "4", "4", "4", "0"]}
        maxWidth="1160px"
        alignItems="center"
        justifyContent="center"
        templateColumns="repeat(3, 1fr)"
      >
        { notHomePage && (
          <Link href="/">
            <a>    
              <Flex alignItems="center">
                <Icon
                  as={FiChevronLeft}
                  fontSize={["16px", "32px"]}
                  color="gray.500"
                  _hover={{
                    color: "yellow.500",
                    transition: "0.3s"
                  }}
                />
              </Flex>      
            </a>
          </Link>
          
        )}
        <Image 
          src="/Images/logo.svg" 
          alt="logo" 
          width={["81px", "184px"]} 
          justifySelf="center"
          gridColumn="2"
        />
      </Grid>
    </Flex>
  );
}
