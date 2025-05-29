import { Flex, Heading, Image, Box } from "@chakra-ui/react";
import backgroundImg from "../../images/table.png";
import styles from "../../modules/reservation.module.css";
import { useFormik } from "formik";
import { forwardRef } from "react";
import calendar from "../../images/Calendar.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Reservation() {
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <div className={styles.custom} onClick={onClick} ref={ref}>
      <Image src={calendar} boxSize={"20px"} />
      {value || "Select date"} <span>▼</span>
    </div>
  ));

  const formik = useFormik({
    initialValues: {
      date: null,
      time: null,
      guests: "",
      seating: "",
      occasion: "",
      request: "",
    },
  });
  return (
    <>
      {/* Flexbox for the background and to control centering of form */}
      <Flex
        h={"500px"}
        bgSize="cover"
        bgPosition="bottom"
        bgImage={`url(${backgroundImg})`}
        display="flex"
        justify={"center"}
        align={"center"}
      >
        {/* This flexbox houses the form */}
        <Flex className={styles.reservation}>
          <Heading
            fontWeight={"light"}
            marginTop={"10px"}
            fontFamily={"markazi-text"}
            size={"4xl"}
            marginBottom={"30px"}
          >
            Book a table
          </Heading>
          <form className={styles.form} onSubmit={formik.handleSubmit}>
            <Flex justify={"space-evenly"} align={"center"}>
              <label htmlFor="date">Date: </label>
              <Box>
                <DatePicker
                  selected={formik.values.date}
                  onChange={(val) => formik.setFieldValue("date", val)}
                  customInput={<CustomInput />}
                  popperPlacement="bottom-start"
                />
              </Box>
            </Flex>
          </form>
        </Flex>
      </Flex>
    </>
  );
}
