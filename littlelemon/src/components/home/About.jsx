import { Box, Flex, Image, Text } from "@chakra-ui/react";
import styles from "../../modules/about.module.css";
import about1 from "../../images/about1.png";
import about2 from "../../images/about2.png";

export default function About() {
  return (
    <>
      <Flex
        className={styles.aboutSection}
        justify={"center"}
        marginBottom={"20"}
        id="about"
      >
        <Flex w={"60%"} direction={{ base: "column", lg: "row" }}>
          <Flex
            align={{ base: "center", lg: "start" }}
            w={{ base: "100%", lg: "50%" }}
            direction={"column"}
            className={styles.textSection}
          >
            <h1>Little Lemon</h1>
            <p>Chicago</p>
            <Text
              textAlign={{ base: "center", lg: "left" }}
              marginTop={"15px"}
              marginBottom={"15px"}
              fontSize={"clamp(12px, 2vw, 16px)"}
            >
              Nestled in the heart of the city, Little Lemon is a family-owned
              Mediterranean restaurant dedicated to serving traditional recipes
              with a fresh, modern twist. Rooted in heritage and inspired by
              generations of home-cooked meals, our menu blends time-honored
              flavors with contemporary creativity. Whether you're enjoying our
              signature Greek salad or indulging in a lemon-infused dessert,
              every dish is made with love, fresh ingredients, and a touch of
              innovation. At Little Lemon, we bring the warmth of the
              Mediterranean to your table.
            </Text>
          </Flex>
          <Flex
            h={"auto"}
            direction={"column"}
            className={styles.imageContainer}
          >
            <Box className={styles.box}>
              <Image className={styles.over} src={about1} />
              <Image className={styles.under} src={about2} />
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
