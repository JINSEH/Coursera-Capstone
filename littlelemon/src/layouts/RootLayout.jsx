import Footer from "../components/home/Footer";
import Navigation from "../components/home/Navigation";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
