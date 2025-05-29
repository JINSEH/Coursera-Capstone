import { Flex } from "@chakra-ui/react";
import logo from "../../images/Vector.png";
import styles from "../../modules/navigation.module.css";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Navigation() {
  const navigate = useNavigate();
  return (
    <Flex justify={"center"}>
      <nav>
        <img src={logo} onClick={() => navigate("")} />
        <button onClick={() => navigate("")}>Home</button>
        <HashLink to={"/#about"}>About</HashLink>
        <HashLink to={"/#menu"}>Menu</HashLink>
        <button>Reservations</button>
        <button>Order Online</button>
        <button>Login</button>
      </nav>
    </Flex>
  );
}
