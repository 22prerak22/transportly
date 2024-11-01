import React from "react";
import { Link } from "react-router-dom";
import Card from "./UI/Card";
import { motion } from "framer-motion";

function FlightSchedule({ schedule }) {
  const flightsByDay = schedule.reduce((acc, flight) => {
    if (!acc[flight.day]) acc[flight.day] = [];
    acc[flight.day].push(flight);
    return acc;
  }, {});

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <header className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-semibold">Scheduled Flights</h2>
        <Link
          to="/orders"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          View Order Schedule
        </Link>
      </header>

      {Object.keys(flightsByDay).map((day) => (
        <Card key={day} className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">
            Scheduled flights for day {day}
          </h3>
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="py-2 px-4 border-b">Flight</th>
                <th className="py-2 px-4 border-b">Departure</th>
                <th className="py-2 px-4 border-b">Arrival</th>
                <th className="py-2 px-4 border-b">View Orders</th>
              </tr>
            </thead>
            <tbody>
              {flightsByDay[day].map((flight) => (
                <tr key={flight.flight_number} className="border-b">
                  <td className="py-2 px-4">{flight.flight_number}</td>
                  <td className="py-2 px-4">{flight.departure_city}</td>
                  <td className="py-2 px-4">{flight.arrival_city}</td>
                  <td className="py-3 px-4">
                    <Link
                      to={`/flight/${flight.flight_number}`}
                      className="bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-700"
                    >
                      View Orders
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      ))}
    </motion.div>
  );
}

export default FlightSchedule;
