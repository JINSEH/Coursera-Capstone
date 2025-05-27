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
        marginY={"10"}
        paddingY={"100px"}
        justifyContent={"center"}
        bg={"#D9D9D9"}
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
            {/* First testimonial */}
            <Card.Root flex={"1"} bg={"white"} border={"none"}>
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
                    <Text fontWeight={"bold"} fontFamily={"karla"}>
                      Sarah
                    </Text>
                    <Text fontWeight={"bold"} fontFamily={"karla"}>
                      M.
                    </Text>
                  </Container>
                </Flex>

                <Card.Description fontSize={"xs"}>
                  "Absolutely fantastic experience! The food was fresh and
                  flavorful, the service was prompt, and the atmosphere felt
                  warm and welcoming. The Greek salad was a standout — I’ll
                  definitely be coming back!"
                </Card.Description>
              </Card.Body>
            </Card.Root>

            {/* Second testimonial */}
            <Card.Root flex={"1"} bg={"white"} border={"none"}>
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
                    <Avatar.Image src={avatar2} />
                    <Avatar.Fallback name="Nue Camp" />
                  </Avatar.Root>
                  <Container
                    paddingLeft={"1"}
                    paddingBottom={"1"}
                    color={"black"}
                  >
                    <Text fontWeight={"bold"} fontFamily={"karla"}>
                      Daniel
                    </Text>
                    <Text fontWeight={"bold"} fontFamily={"karla"}>
                      K.
                    </Text>
                  </Container>
                </Flex>

                <Card.Description fontSize={"xs"}>
                  "From appetizers to dessert, everything was perfectly seasoned
                  and beautifully plated. The bruschetta was to die for, and the
                  lemon dessert took me right back to my childhood. Highly
                  recommended!"
                </Card.Description>
              </Card.Body>
            </Card.Root>

            {/* Third testimonial */}
            <Card.Root flex={"1"} bg={"white"} border={"none"}>
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
                    <Avatar.Image src={avatar3} />
                    <Avatar.Fallback name="Nue Camp" />
                  </Avatar.Root>
                  <Container
                    paddingLeft={"1"}
                    paddingBottom={"1"}
                    color={"black"}
                  >
                    <Text fontWeight={"bold"} fontFamily={"karla"}>
                      Jess
                    </Text>
                    <Text fontWeight={"bold"} fontFamily={"karla"}>
                      L.
                    </Text>
                  </Container>
                </Flex>

                <Card.Description>
                  "Great spot for a casual night out. The staff was friendly and
                  helpful, and the portions were generous. Only reason for 4
                  stars is it was a bit noisy during peak hours, but the food
                  made up for it."
                </Card.Description>
              </Card.Body>
            </Card.Root>

            {/* Fourth testimonial */}
            <Card.Root flex={"1"} bg={"white"} border={"none"}>
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
                    <Avatar.Image src={avatar4} />
                    <Avatar.Fallback name="Nue Camp" />
                  </Avatar.Root>
                  <Container
                    paddingLeft={"1"}
                    paddingBottom={"1"}
                    color={"black"}
                  >
                    <Text fontWeight={"bold"} fontFamily={"karla"}>
                      Michael
                    </Text>
                    <Text fontWeight={"bold"} fontFamily={"karla"}>
                      T.
                    </Text>
                  </Container>
                </Flex>

                <Card.Description fontSize={"xs"}>
                  "One of the best dining experiences I’ve had in a while. The
                  flavors were authentic, and I appreciated the attention to
                  detail in every dish. You can tell they care about quality
                  here."
                </Card.Description>
              </Card.Body>
            </Card.Root>
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}
