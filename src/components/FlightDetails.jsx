import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import Card from "./UI/Card";

function FlightDetails() {
  const { flightNumber } = useParams();
  const navigate = useNavigate();

  const schedule = useSelector((state) => state.flights.schedule);
  const orders = useSelector((state) => state.flights.orders);

  const flight = schedule.find(
    (f) => f.flight_number === parseInt(flightNumber, 10)
  );
  const assignedOrders = Object.entries(orders).filter(
    ([, order]) => order.flight === parseInt(flightNumber, 10)
  );

  return (
    <div>
      <motion.div
        className="flex justify-between mb-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl font-semibold">
          Flight {flightNumber} Details
        </h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate(-1)}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          View Flight Schedule
        </motion.button>
      </motion.div>

      {flight ? (
        <Card className="mb-4">
          <p>
            <strong>Departure:</strong> {flight.departure_city}
          </p>
          <p>
            <strong>Arrival:</strong> {flight.arrival_city}
          </p>
          <p>
            <strong>Day:</strong> {flight.day}
          </p>
        </Card>
      ) : (
        <p>Flight not found</p>
      )}

      <motion.h3
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-xl font-semibold mb-2"
      >
        Assigned Orders
      </motion.h3>
      <Card>
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="py-2 px-4 border-b">Order</th>
              <th className="py-2 px-4 border-b">Flight</th>
              <th className="py-2 px-4 border-b">Departure</th>
              <th className="py-2 px-4 border-b">Arrival</th>
              <th className="py-2 px-4 border-b">Day</th>
            </tr>
          </thead>
          <tbody>
            {assignedOrders.length > 0 ? (
              assignedOrders.map(([orderId]) => (
                <tr key={orderId} className="border-b">
                  <td className="py-2 px-4">{orderId}</td>
                  <td className="py-2 px-4">{flight.flight_number}</td>
                  <td className="py-2 px-4">{flight.departure_city}</td>
                  <td className="py-2 px-4">{flight.arrival_city}</td>
                  <td className="py-2 px-4">{flight.day}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-2 px-4 text-center">
                  No orders assigned to this flight.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

export default FlightDetails;
