import RootLayout from "./layouts/RootLayout";
import styles from "./modules/app.module.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Reserved from "./components/reservations/Reserved";
import ReservationProvider from "./context/ReservationContext";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="booking" element={<Booking />} />
        <Route path="reservations" element={<Reserved />} />
      </Route>
    )
  );
  return (
    <>
      <ReservationProvider>
        <RouterProvider router={router} />
      </ReservationProvider>
    </>
  );
}

export default App;
