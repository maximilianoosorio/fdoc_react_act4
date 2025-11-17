// components/EventList.jsx
import React from "react";

import EventCard from "./EventCard";

const events = [
  { id: 1, title: "Desfile de Autos Deportivos", date: "2025-12-05", location: "Avenida Las Vegas, Medellín", price: 120000 },
  { id: 2, title: "ExpoCar Colombia 2025", date: "2025-11-20", location: "Plaza Mayor, Medellín", price: 90000 },
  { id: 3, title: "Rally Nocturno Antioquia", date: "2026-01-10", location: "Santa Fe de Antioquia", price: 150000 },
];

function EventList() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Proximos Eventos</h1>

      <>
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </>
    </div>
  );
}

export default EventList;
