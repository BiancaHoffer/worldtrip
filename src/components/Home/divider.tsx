import { Image, VStack } from "@chakra-ui/react";

export function Divider() {
  return (
    <VStack
      py={["6", "16"]}
    >
        <Image src="images/divider.svg" alt="divider" />
    </VStack>
  );
}