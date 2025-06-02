import { Flex, Text } from "@chakra-ui/react";
import reserved from "../../images/reserved.png";
import styles from "../../modules/reserved.module.css";
import ReservedHeading from "./ReservedHeading";
import { useContext } from "react";
import { ReservationContext } from "../../context/ReservationContext";

export default function Reserved() {
  const { reservationList } = useContext(ReservationContext);

  const listReservations = reservationList.map((reservation, index) => (
    <Flex className={styles.reserved} key={index}>
      <Flex className={styles.container}>
        <div className={styles.labelText}>
          <label htmlFor="name">Name: </label>
          <Text className={styles.text}>{reservation.name}</Text>
        </div>

        <div className={styles.labelText}>
          <label htmlFor="date">Date: </label>
          <Text className={styles.text}>
            {new Date(reservation.date).toDateString()}
          </Text>
        </div>

        <div className={styles.labelText}>
          <label htmlFor="Time">Time: </label>
          <Text className={styles.text}>{reservation.time}</Text>
        </div>

        <div className={styles.labelText}>
          <label htmlFor="guest">Guest Count: </label>
          <Text className={styles.text}>{reservation.guests}</Text>
        </div>

        <div className={styles.labelText}>
          <label htmlFor="occasion">Occasion: </label>
          <Text className={styles.text}>{reservation.occasion}</Text>
        </div>

        <div className={styles.labelText}>
          <label htmlFor="request">Request: </label>
          <Text className={styles.text}>{reservation.request}</Text>
        </div>
      </Flex>
    </Flex>
  ));

  return (
    <>
      <ReservedHeading />
      {/* Flexbox for the background and to control centering of form */}
      <Flex
        paddingY={"30px"}
        bgSize="cover"
        bgPosition="bottom"
        bgImage={`url(${reserved})`}
        display="flex"
        justify={"center"}
        align={"center"}
      >
        <Flex className={styles.reservation}>{listReservations}</Flex>
      </Flex>
    </>
  );
}
