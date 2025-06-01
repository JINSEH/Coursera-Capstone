import { Flex, Heading } from "@chakra-ui/react";

export default function ReservedHeading() {
  return (
    <>
      <Flex bg={"#495e57"} h={"150px"} justify={"center"} align={"center"}>
        <Heading fontFamily={"markazi-text"} size={"4xl"} color={"white"}>
          Your Reservations
        </Heading>
      </Flex>
    </>
  );
}
