import {
  Text,
  Flex,
  Stack,
  Card,
  Image,
  Avatar,
  Container,
} from "@chakra-ui/react";
import avatar1 from "../../images/avatar1.png";
import avatar2 from "../../images/avatar2.png";
import avatar3 from "../../images/avatar3.png";
import avatar4 from "../../images/avatar4.png";
import stars from "../../images/Stars.png";

export default function Testimonials() {
  return (
    <>
      {/* Flex Container to align and justify content to center */}
      <Flex
        marginTop={"10"}
        justifyContent={"center"}
        bg={"#D9D9D9"}
        padding={"200px"}
      >
        {/* Flex Container for Text and Stack, with fixed width of 60% to maintain center */}
        <Flex
          w={"60%"}
          justify={"center"}
          align={"center"}
          direction={"column"}
          gap={"5"}
        >
          <Text fontFamily={"markazi-text"} textStyle={"4xl"} color={"#333333"}>
            Testimonials
          </Text>

          {/* Stack Container for cards */}
          <Stack direction={{ base: "column", lg: "row" }}>
            <Card.Root width="200px" bg={"white"} border={"none"}>
              <Flex justify={"center"} paddingTop={"3"}>
                <Image src={stars} w={"100px"} />
              </Flex>
              <Card.Body gap="2" paddingTop={"3"}>
                <Flex align={"center"}>
                  <Avatar.Root
                    shape="rounded"
                    bg={"white"}
                    borderColor={"white"}
                  >
                    <Avatar.Image src={avatar1} />
                    <Avatar.Fallback name="Nue Camp" />
                  </Avatar.Root>
                  <Container
                    paddingLeft={"1"}
                    paddingBottom={"1"}
                    color={"black"}
                  >
                    <Text
                      textStyle={"xs"}
                      fontWeight={"bold"}
                      fontFamily={"karla"}
                    >
                      First name
                    </Text>
                    <Text
                      textStyle={"xs"}
                      fontWeight={"bold"}
                      fontFamily={"karla"}
                    >
                      Last name
                    </Text>
                  </Container>
                </Flex>

                <Card.Description fontSize={"xs"}>
                  This is the card body. Lorem ipsum dolor sit amet, consectetur
                </Card.Description>
              </Card.Body>
            </Card.Root>
            <Card.Root width="200px" bg={"white"} border={"none"}>
              <Flex justify={"center"} paddingTop={"3"}>
                <Image src={stars} w={"100px"} />
              </Flex>
              <Card.Body gap="2" paddingTop={"3"}>
                <Flex align={"center"}>
                  <Avatar.Root
                    shape="rounded"
                    bg={"white"}
                    borderColor={"white"}
                  >
                    <Avatar.Image src={avatar1} />
                    <Avatar.Fallback name="Nue Camp" />
                  </Avatar.Root>
                  <Container
                    paddingLeft={"1"}
                    paddingBottom={"1"}
                    color={"black"}
                  >
                    <Text
                      textStyle={"xs"}
                      fontWeight={"bold"}
                      fontFamily={"karla"}
                    >
                      First name
                    </Text>
                    <Text
                      textStyle={"xs"}
                      fontWeight={"bold"}
                      fontFamily={"karla"}
                    >
                      Last name
                    </Text>
                  </Container>
                </Flex>

                <Card.Description fontSize={"xs"}>
                  This is the card body. Lorem ipsum dolor sit amet, consectetur
                </Card.Description>
              </Card.Body>
            </Card.Root>
            <Card.Root width="200px" bg={"white"} border={"none"}>
              <Flex justify={"center"} paddingTop={"3"}>
                <Image src={stars} w={"100px"} />
              </Flex>
              <Card.Body gap="2" paddingTop={"3"}>
                <Flex align={"center"}>
                  <Avatar.Root
                    shape="rounded"
                    bg={"white"}
                    borderColor={"white"}
                  >
                    <Avatar.Image src={avatar1} />
                    <Avatar.Fallback name="Nue Camp" />
                  </Avatar.Root>
                  <Container
                    paddingLeft={"1"}
                    paddingBottom={"1"}
                    color={"black"}
                  >
                    <Text
                      textStyle={"xs"}
                      fontWeight={"bold"}
                      fontFamily={"karla"}
                    >
                      First name
                    </Text>
                    <Text
                      textStyle={"xs"}
                      fontWeight={"bold"}
                      fontFamily={"karla"}
                    >
                      Last name
                    </Text>
                  </Container>
                </Flex>

                <Card.Description fontSize={"xs"}>
                  This is the card body. Lorem ipsum dolor sit amet, consectetur
                </Card.Description>
              </Card.Body>
            </Card.Root>
            <Card.Root width="200px" bg={"white"} border={"none"}>
              <Flex justify={"center"} paddingTop={"3"}>
                <Image src={stars} w={"100px"} />
              </Flex>
              <Card.Body gap="2" paddingTop={"3"}>
                <Flex align={"center"}>
                  <Avatar.Root
                    shape="rounded"
                    bg={"white"}
                    borderColor={"white"}
                  >
                    <Avatar.Image src={avatar1} />
                    <Avatar.Fallback name="Nue Camp" />
                  </Avatar.Root>
                  <Container
                    paddingLeft={"1"}
                    paddingBottom={"1"}
                    color={"black"}
                  >
                    <Text
                      textStyle={"xs"}
                      fontWeight={"bold"}
                      fontFamily={"karla"}
                    >
                      First name
                    </Text>
                    <Text
                      textStyle={"xs"}
                      fontWeight={"bold"}
                      fontFamily={"karla"}
                    >
                      Last name
                    </Text>
                  </Container>
                </Flex>

                <Card.Description fontSize={"xs"}>
                  This is the card body. Lorem ipsum dolor sit amet, consectetur
                </Card.Description>
              </Card.Body>
            </Card.Root>
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}
