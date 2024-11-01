# Transport.ly - Flight and Order Management System

An automated air freight scheduling service for managing flights and orders. This application provides a user interface to view scheduled flights, assign orders to flights, and manage details of each flight and order.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

## Demo

You can view a live demo of this application at: [Demo URL here](#)

## Features

- View the list of scheduled flights by day.
- Drill down into individual flight details to view assigned orders.
- View all orders with flight details (or as "unassigned" if not assigned).
- Smooth animations using Framer Motion.
- Responsive design using Tailwind CSS.

## Technologies

- **React**: Frontend library for building the user interface.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Framer Motion**: Animation library for React to add smooth animations.
- **React Router**: Declarative routing for React applications.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- Basic knowledge of React and JavaScript.

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/transport-ly.git
   ```

2. Navigate to the project directory:

   ```bash
   cd transport-ly
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### Usage

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open http://localhost:3000 to view it in the browser.

### Project Structure

src/
├── components/
│ ├── FlightSchedule.jsx # Component to display scheduled flights
│ ├── FlightDetails.jsx # Component to show flight details and assigned orders
│ ├── OrdersList.jsx # Component to view all orders
│ ├── UI/
│ │ └── Card.jsx # Reusable Card component with Framer Motion animations
├── data/
│ ├── schedule.json # JSON file containing flight schedules
│ └── orders.json # JSON file containing orders
├── store/
│ ├── flightsSlice.js # Redux slice for flight and order data management
│ └── index.js # Redux store configuration
├── App.jsx # Main application component with routing
├── styles.css # Tailwind CSS styling configuration
└── main.jsx # Entry point for the React application
