import logo from "../../images/Vector.png";
import styles from "../../modules/navigation.module.css";

export default function Navigation() {
  return (
    <nav>
      <img src={logo} />
      <section>
        <button>Home</button>
        <button>About</button>
        <button>Menu</button>
        <button>Reservations</button>
        <button>Order Online</button>
        <button>Login</button>
      </section>
    </nav>
  );
}
