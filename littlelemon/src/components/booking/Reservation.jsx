import {
  Flex,
  Heading,
  Image,
  Box,
  Menu,
  MenuItem,
  Button,
} from "@chakra-ui/react";

import backgroundImg from "../../images/table.png";
import clock from "../../images/Clock.png";
import guest from "../../images/Guest.png";
import champagne from "../../images/Champagne.png";
import phone from "../../images/Phone.png";
import email from "../../images/Email.png";
import styles from "../../modules/reservation.module.css";
import { useFormik } from "formik";
import { forwardRef } from "react";
import calendar from "../../images/Calendar.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Reservation() {
  const CustomDateInput = forwardRef(({ value, onClick, className }, ref) => (
    <Button className={className} onClick={onClick} ref={ref}>
      <Image src={calendar} boxSize={"20px"} />
      {value || "Select date"} <span>▼</span>
    </Button>
  ));

  const { setReservationList } = useContext();

  function RadioInput({ formik, name, value, label }) {
    return (
      <label>
        <input
          type="radio"
          name={name}
          value={value}
          checked={formik.values[name] === value}
          onChange={formik.handleChange}
        />
        <span className={styles.radioItem}>{label}</span>
      </label>
    );
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      date: null,
      time: null,
      guests: "",
      seating: "",
      occasion: "",
      request: "",
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
      localStorage.setItem("bookingReservation", JSON.stringify(values));
    },
  });
  return (
    <>
      {/* Flexbox for the background and to control centering of form */}
      <Flex
        h={"900px"}
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
            {/* For Name */}
            <Flex w={"60%"} justify={"space-between"}>
              <label htmlFor="date">Name: </label>
              <input
                value={formik.values.name}
                onChange={(e) => formik.setFieldValue("name", e.target.value)}
                className={styles.name}
                type="text"
              />
            </Flex>
            {/* End of Name */}
            {/* For date */}
            <Flex w={"60%"} justify={"space-between"}>
              <label htmlFor="date">Date: </label>
              <Box>
                <DatePicker
                  className={styles.custom}
                  selected={formik.values.date}
                  onChange={(val) =>
                    formik.setFieldValue("date", val.toLocaleDateString())
                  }
                  customInput={<CustomDateInput />}
                  popperPlacement="bottom-start"
                />
              </Box>
            </Flex>
            {/* End of date */}

            {/* Start of Time */}
            <Flex w={"60%"} justify={"space-between"}>
              <label htmlFor="Time">Time: </label>
              <Box>
                <Menu.Root>
                  <Menu.Trigger asChild>
                    <Button className={styles.custom}>
                      <Image src={clock} boxSize={"20px"} />
                      {formik.values.time || "Select Time"}
                      <span>▼</span>
                    </Button>
                  </Menu.Trigger>
                  <Menu.Content className={styles.menuContent}>
                    {["12pm - 1pm", "1pm - 2pm", "7pm - 8pm", "8pm - 9pm"].map(
                      (timing) => (
                        <MenuItem
                          className={styles.timeitem}
                          key={timing}
                          onClick={() => formik.setFieldValue("time", timing)}
                        >
                          {timing}
                        </MenuItem>
                      )
                    )}
                  </Menu.Content>
                </Menu.Root>
              </Box>
            </Flex>
            {/* End of Time */}

            {/* Start of Guests */}
            <Flex w={"60%"} justify={"space-between"}>
              <label htmlFor="guests">Guests: </label>
              <Box>
                <Menu.Root>
                  <Menu.Trigger asChild>
                    <Button className={styles.custom}>
                      <Image src={guest} boxSize={"20px"} />
                      {formik.values.guests || "No. of Guests"}
                      <span>▼</span>
                    </Button>
                  </Menu.Trigger>
                  <Menu.Content className={styles.menuContent}>
                    {["1", "2", "3", "4", "5"].map((guest) => (
                      <MenuItem
                        className={styles.timeitem}
                        key={guest}
                        onClick={() => formik.setFieldValue("guests", guest)}
                      >
                        {guest}
                      </MenuItem>
                    ))}
                  </Menu.Content>
                </Menu.Root>
              </Box>
            </Flex>
            {/* End of Guests */}

            {/* Start of Seating */}
            <Flex w={"60%"} justify={"space-between"}>
              <label htmlFor="seating">Seating: </label>
              <div
                role="group"
                aria-labelledby="seating"
                className={styles.buttonGroup}
              >
                <RadioInput
                  className={styles.radioItem}
                  formik={formik}
                  name="seating"
                  value="Indoor"
                  label="Indoor"
                />
                <RadioInput
                  className={styles.radioItem}
                  formik={formik}
                  name="seating"
                  value="Outdoor"
                  label="Outdoor"
                />
              </div>
            </Flex>
            {/* End of Seating */}

            {/* Start of Occasion */}
            <Flex w={"60%"} justify={"space-between"}>
              <label htmlFor="occasion">Occasion: </label>
              <Box>
                <Menu.Root>
                  <Menu.Trigger asChild>
                    <Button className={styles.custom}>
                      <Image src={champagne} boxSize={"20px"} />
                      {formik.values.occasion || "Occasion"}
                      <span>▼</span>
                    </Button>
                  </Menu.Trigger>
                  <Menu.Content className={styles.menuContent}>
                    {["Birthday", "Engagement", "Anniversary"].map(
                      (occasion) => (
                        <MenuItem
                          className={styles.timeitem}
                          key={occasion}
                          onClick={() =>
                            formik.setFieldValue("occasion", occasion)
                          }
                        >
                          {occasion}
                        </MenuItem>
                      )
                    )}
                  </Menu.Content>
                </Menu.Root>
              </Box>
            </Flex>
            {/* End of Occasion */}

            {/* Start of Special Request */}
            <Flex w={"60%"} direction={"column"}>
              <label htmlFor="request">Special Request: </label>
              <textarea
                name="request"
                id="request"
                value={formik.values.request}
                onChange={(e) =>
                  formik.setFieldValue("request", e.target.value)
                }
                className={styles.textarea}
                placeholder="Type your message..."
                rows={"4"}
              ></textarea>
            </Flex>

            {/* End of Special Request */}
            <Button
              w={"60%"}
              color={"black"}
              fontFamily={"karla"}
              fontSize={"16px"}
              bg={"#F4CE14"}
              marginBottom={"10px"}
              type="submit"
            >
              Book my Table
            </Button>
          </form>
          <Button
            w={"60%"}
            color={"white"}
            fontFamily={"karla"}
            fontSize={"16px"}
            marginBottom={"10px"}
            variant={"outline"}
            borderColor={"#F4CE14"}
            _hover={{ bg: "#F4CE14", color: "black", borderColor: "black" }}
          >
            <Image src={phone} boxSize={"20px"} />
            Prefer to Call?
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
          >
            <Image src={email} boxSize={"20px"} />
            Prefer to Email?
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
