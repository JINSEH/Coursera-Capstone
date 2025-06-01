import { createContext, useState } from "react";

export default function ReservationProvider({ children }) {
  const userContext = createContext();
  const [reservationList, setReservationList] = useState([]);
  const contextValue = {
    reservationList,
    setReservationList,
  };
  return (
    <userContext.Provider value={contextValue}>{children}</userContext.Provider>
  );
}
