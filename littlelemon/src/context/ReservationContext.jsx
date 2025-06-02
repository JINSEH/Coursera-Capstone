import { createContext, useState } from "react";

export const ReservationContext = createContext();
export default function ReservationProvider({ children }) {
  const [reservationList, setReservationList] = useState(() => {
    const currentResevations = localStorage.getItem("bookingReservation");
    try {
      return currentResevations ? JSON.parse(currentResevations) : [];
    } catch {
      return [];
    }
  });

  const contextValue = {
    reservationList,
    setReservationList,
  };
  return (
    <ReservationContext.Provider value={contextValue}>
      {children}
    </ReservationContext.Provider>
  );
}
