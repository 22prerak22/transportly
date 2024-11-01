// src/store/flightsSlice.js

import { createSlice } from "@reduxjs/toolkit";
import scheduleData from "../data/schedule.json";
import ordersData from "../data/orders.json";

const initialState = {
  schedule: scheduleData,
  orders: ordersData,
};

const flightsSlice = createSlice({
  name: "flights",
  initialState,
  reducers: {
    assignOrdersToFlights(state) {
      const flightCapacity = 20;
      let flightAssignments = {};

      // Initialize flight assignments
      state.schedule.forEach((flight) => {
        flightAssignments[flight.flight_number] = [];
      });

      // Assign orders to flights based on destination and capacity
      Object.entries(state.orders).forEach(([orderId, order]) => {
        const availableFlight = state.schedule.find(
          (flight) =>
            flight.arrival_city === order.destination &&
            flightAssignments[flight.flight_number].length < flightCapacity
        );

        if (availableFlight) {
          flightAssignments[availableFlight.flight_number].push(orderId);
          state.orders[orderId].flight = availableFlight.flight_number;
        }
      });
    },
  },
});

export const { assignOrdersToFlights } = flightsSlice.actions;
export default flightsSlice.reducer;
