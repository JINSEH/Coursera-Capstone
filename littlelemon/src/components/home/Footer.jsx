import { Box, Flex, Image, Text, Heading } from "@chakra-ui/react";
import footerLogo from "../../images/footerLogo.png";
import styles from "../../modules/footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footerSection}>
        <Flex paddingTop={"5%"} w={"60%"} justify={"center"}>
          <Flex w={"30%"}>
            <Image h={"50%"} src={footerLogo} />
          </Flex>

          {/* Right Container */}
          <Flex w={"70%"} justify={"space-between"}>
            <Flex direction={"column"}>
              <Heading
                fontWeight={"bold"}
                size={{ base: "sm", lg: "lg" }}
                color={"#495e57"}
              >
                Doormat Navigation
              </Heading>
              <Heading size={{ base: "xs", lg: "md" }}>Occasional menu</Heading>
              <Heading size={{ base: "xs", lg: "md" }}>About</Heading>
              <Heading size={{ base: "xs", lg: "md" }}>Menu</Heading>
              <Heading size={{ base: "xs", lg: "md" }}>Reservations</Heading>
              <Heading size={{ base: "xs", lg: "md" }}>Order Online</Heading>
              <Heading size={{ base: "xs", lg: "md" }}>Login</Heading>
            </Flex>

            <Flex direction={"column"}>
              <Heading
                fontWeight={"bold"}
                size={{ base: "sm", lg: "lg" }}
                color={"#495e57"}
              >
                Contact
              </Heading>
              <Heading size={{ base: "xs", lg: "md" }}>Address</Heading>
              <Heading size={{ base: "xs", lg: "md" }}>Phone Number</Heading>
              <Heading size={{ base: "xs", lg: "md" }}>Email</Heading>
            </Flex>

            <Flex direction={"column"}>
              <Heading
                fontWeight={"bold"}
                size={{ base: "sm", lg: "lg" }}
                color={"#495e57"}
              >
                Social Media Links
              </Heading>
              <Heading size={{ base: "xs", lg: "md" }}>Instagram</Heading>
              <Heading size={{ base: "xs", lg: "md" }}>Facebook</Heading>
              <Heading size={{ base: "xs", lg: "md" }}>TikTok</Heading>
              <Heading size={{ base: "xs", lg: "md" }}>YouTube</Heading>
            </Flex>
          </Flex>
        </Flex>
      </footer>
    </>
  );
}
