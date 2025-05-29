import { Flex, Heading } from "@chakra-ui/react";

export default function Header() {
  return (
    <>
      <Flex bg={"#495e57"} h={"150px"} justify={"center"} align={"center"}>
        <Heading fontFamily={"markazi-text"} size={"4xl"} color={"white"}>
          Book Your Reservation
        </Heading>
      </Flex>
    </>
  );
}
