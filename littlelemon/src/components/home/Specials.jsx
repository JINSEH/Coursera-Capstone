import styles from "../../modules/specials.module.css";
import { Card, Image, Stack, Flex, Text, Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import greekSalad from "../../images/greeksalad.png";
import bruschetta from "../../images/bruschetta.png";
import lemondessert from "../../images/lemondessert.png";

export default function Specials() {
  return (
    <>
      <section className={styles.specials}>
        <div id={styles.h1}>This weeks specials</div>
        <div id={styles.button}>
          <button>Online Menu</button>
        </div>
      </section>

      <section className={styles.cardContainer}>
        <div className={styles.arrows}>
          <FontAwesomeIcon icon={faCircleChevronLeft} size="s" />
          <FontAwesomeIcon icon={faCircleChevronRight} size="s" />
        </div>

        {/* Card Container */}
        <Stack
          width="60%"
          align={"stretch"}
          justify={{ base: "center", lg: "space-between" }}
          gap={2}
          direction={{ base: "column", lg: "row" }}
        >
          {/* First Card */}
          <Card.Root flex={"1"} border={"none"} bg={"gray.200"}>
            <Image
              objectFit={"cover"}
              bg={"white"}
              src={greekSalad}
              alt="Greek salad"
            />
            <Card.Body gap="3">
              <Flex justify={"space-between"}>
                <Card.Title color={"black"}>Greek salad</Card.Title>
                <Text color={"orange"}>$12.99</Text>
              </Flex>
              <Card.Description>
                The famous greek salad of crispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with crunchy garlic and
                rosemary croutons.
              </Card.Description>
            </Card.Body>
            <Card.Footer gap="2">
              <Button
                display={"flex"}
                alignContent={"center"}
                variant={"plain"}
                color={"black"}
                padding={"0"}
              >
                Order a delivery
                <FontAwesomeIcon icon={faTruck} />
              </Button>
            </Card.Footer>
          </Card.Root>

          {/* Second Card */}
          <Card.Root flex={"1"} border={"none"} bg={"gray.200"}>
            <Image objectFit={"cover"} bg={"white"} src={bruschetta} />
            <Card.Body gap="3">
              <Flex justify={"space-between"}>
                <Card.Title color={"black"}>Bruschetta</Card.Title>
                <Text color={"orange"}>$5.99</Text>
              </Flex>
              <Card.Description>
                Our Bruschetta is made from grilled bread that has been smeared
                with garlic and seasoned with salt and olive oil.
              </Card.Description>
            </Card.Body>
            <Card.Footer gap="2">
              <Button
                display={"flex"}
                alignContent={"center"}
                variant={"plain"}
                color={"black"}
                padding={"0"}
              >
                Order a delivery
                <FontAwesomeIcon icon={faTruck} />
              </Button>
            </Card.Footer>
          </Card.Root>

          {/* Third Card */}
          <Card.Root flex={"1"} border={"none"} bg={"gray.200"}>
            <Image objectFit={"cover"} bg={"white"} src={lemondessert} />
            <Card.Body gap="3">
              <Flex justify={"space-between"}>
                <Card.Title color={"black"}>Lemon Dessert</Card.Title>
                <Text color={"orange"}>$5.00</Text>
              </Flex>
              <Card.Description>
                This comes straight from grandma’s recipe book, every last
                ingredient has been sourced and is as authentic as can be
                imagined.
              </Card.Description>
            </Card.Body>
            <Card.Footer gap="2">
              <Button
                display={"flex"}
                alignContent={"center"}
                variant={"plain"}
                color={"black"}
                padding={"0"}
              >
                Order a delivery
                <FontAwesomeIcon icon={faTruck} />
              </Button>
            </Card.Footer>
          </Card.Root>
        </Stack>
      </section>
    </>
  );
}
