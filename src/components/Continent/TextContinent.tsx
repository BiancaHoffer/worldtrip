import { GridItem, Text } from "@chakra-ui/react";

interface TextContinentProps {
  text: string;
}

export function TextContinent({text}: TextContinentProps) {
  return (
    <GridItem
        maxWidth="600px"
        textAlign="justify"
        lineHeight={["1.313rem", "2.25rem"]}
        fontSize={["0.875rem", "1.5rem"]}
        mx="auto"
    >
        <Text
            color="gray.500"
        >
            {text}
        </Text>
    </GridItem>
  );
}