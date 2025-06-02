import { Flex, Heading, Image, Text, Button } from "@chakra-ui/react";
import backgroundImg from "../../images/table.png";
import styles from "../../modules/confirmation.module.css";
import confirm from "../../images/confirm.png";
import { useNavigate } from "react-router-dom";

export default function Confirmation() {
  const navigate = useNavigate();
  return (
    <>
      {/* Flexbox for the background and to control centering of form */}
      <Flex
        paddingY={"60px"}
        bgSize="cover"
        bgPosition="bottom"
        bgImage={`url(${backgroundImg})`}
        display="flex"
        justify={"center"}
        align={"center"}
      >
        <Flex className={styles.reservation}>
          <Flex direction={"column"} align={"center"} gap={"10px"}>
            <Image boxSize={"70px"} src={confirm} />
            <Heading
              textAlign={"center"}
              fontSize={"40px"}
              fontFamily={"karla"}
              fontWeight={"light"}
              lineHeight={"50px"}
            >
              Your reservation has been confirmed
            </Heading>
          </Flex>
          <Text fontSize={"24px"} fontFamily={"karla"} fontWeight={"light"}>
            We look forward to welcoming you.
          </Text>
          <Text
            textAlign={"center"}
            fontSize={"24px"}
            fontFamily={"karla"}
            fontWeight={"light"}
          >
            Feel free to review your reservation details in the reservation
            section.
          </Text>
          <Flex
            w={"80%"}
            direction={"column"}
            justify={"center"}
            align={"center"}
            gap={"20px"}
          >
            <Button
              w={"60%"}
              color={"black"}
              fontFamily={"karla"}
              fontSize={"16px"}
              bg={"#F4CE14"}
              marginBottom={"10px"}
              type="submit"
              onClick={() => navigate("/reservations")}
            >
              View Reservation Details
            </Button>
            <Button
              w={"60%"}
              color={"white"}
              fontFamily={"karla"}
              fontSize={"16px"}
              marginBottom={"10px"}
              variant={"outline"}
              borderColor={"#F4CE14"}
              _hover={{ bg: "#F4CE14", color: "black", borderColor: "black" }}
              onClick={() => navigate("/")}
            >
              Back to home
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
