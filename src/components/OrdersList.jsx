import React from "react";
import { Link } from "react-router-dom";
import Card from "./UI/Card";
import { motion } from "framer-motion";

function OrdersList({ orders, schedule }) {
  const flightDetails = schedule.reduce((acc, flight) => {
    acc[flight.flight_number] = flight;
    return acc;
  }, {});

  return (
    <div>
      <motion.header
        className="flex justify-between items-center mb-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl font-semibold">Orders</h2>
        <Link
          to="/"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          View Flight Schedule
        </Link>
      </motion.header>

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
            {Object.entries(orders).map(([orderId, order]) => {
              const flight = order.flight ? flightDetails[order.flight] : null;
              return (
                <tr key={orderId} className="border-b">
                  <td className="py-2 px-4">{orderId}</td>
                  <td className="py-2 px-4">
                    {flight ? flight.flight_number : "Unassigned"}
                  </td>
                  <td className="py-2 px-4">
                    {flight ? flight.departure_city : "-"}
                  </td>
                  <td className="py-2 px-4">
                    {flight ? flight.arrival_city : "-"}
                  </td>
                  <td className="py-2 px-4">{flight ? flight.day : "-"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

export default OrdersList;
