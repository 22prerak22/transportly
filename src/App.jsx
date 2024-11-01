// src/App.jsx

import React, { useEffect } from "react";
import "./styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { assignOrdersToFlights } from "./store/flightsSlice";
import FlightSchedule from "./components/FlightSchedule";
import OrdersList from "./components/OrdersList";
import FlightDetails from "./components/FlightDetails";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const dispatch = useDispatch();

  // Dispatch the assignOrdersToFlights action on initial load
  useEffect(() => {
    dispatch(assignOrdersToFlights());
  }, [dispatch]);

  // Access schedule and orders from Redux
  const schedule = useSelector((state) => state.flights.schedule);
  const orders = useSelector((state) => state.flights.orders);

  return (
    <Router>
      <div className="container mx-auto p-4">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Transport.ly
            </h1>
            <p className="text-gray-600 mb-8">
              An automated air freight scheduling service.
            </p>
          </motion.div>
        </AnimatePresence>
        <Routes>
          <Route path="/" element={<FlightSchedule schedule={schedule} />} />
          <Route
            path="/orders"
            element={<OrdersList orders={orders} schedule={schedule} />}
          />
          <Route
            path="/flight/:flightNumber"
            element={<FlightDetails schedule={schedule} orders={orders} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
