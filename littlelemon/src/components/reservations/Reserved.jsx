import { Flex, Text } from "@chakra-ui/react";
import reserved from "../../images/reserved.png";
import styles from "../../modules/reserved.module.css";
import ReservedHeading from "./ReservedHeading";
import { useEffect, useState } from "react";

export default function Reserved() {
  const [storedValues, setStoredValues] = useState(null);
  useEffect(() => {
    const getValues = localStorage.getItem("bookingReservation");
    if (getValues) {
      setStoredValues(JSON.parse(getValues));
    }
  }, []);
  return (
    <>
      <ReservedHeading />
      {/* Flexbox for the background and to control centering of form */}
      <Flex
        h={"850px"}
        bgSize="cover"
        bgPosition="bottom"
        bgImage={`url(${reserved})`}
        display="flex"
        justify={"center"}
        align={"center"}
      >
        <Flex className={styles.reservation}>
          {storedValues ? (
            <Flex className={styles.reserved}>
              <Flex className={styles.container}>
                <div className={styles.labelText}>
                  <label htmlFor="name">Name: </label>
                  <Text className={styles.text}>{storedValues.name}</Text>
                </div>

                <div className={styles.labelText}>
                  <label htmlFor="date">Date: </label>
                  <Text className={styles.text}>{storedValues.date}</Text>
                </div>

                <div className={styles.labelText}>
                  <label htmlFor="Time">Time: </label>
                  <Text className={styles.text}>{storedValues.time}</Text>
                </div>

                <div className={styles.labelText}>
                  <label htmlFor="guest">Guest Count: </label>
                  <Text className={styles.text}>{storedValues.guests}</Text>
                </div>

                <div className={styles.labelText}>
                  <label htmlFor="occasion">Occasion: </label>
                  <Text className={styles.text}>{storedValues.occasion}</Text>
                </div>

                <div className={styles.labelText}>
                  <label htmlFor="request">Request: </label>
                  <Text className={styles.text}>{storedValues.request}</Text>
                </div>
              </Flex>
            </Flex>
          ) : null}
        </Flex>
      </Flex>
    </>
  );
}
