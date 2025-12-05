import React from "react";
import EventCard from "./EventCard";

/**
 * Props esperadas:
 * - events (Array<Object>): Lista de eventos a mostrar.
 *   Cada evento debe contener: { id, title, date, location, price }
 * - title (string, opcional): Título de la lista de eventos
 */
export default function EventList({ events = [], title = "Próximos Eventos" }) {
  if (events.length === 0) {
    return <p className="text-center text-gray-600 mt-4">No hay eventos disponibles.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl text-black font-bold mb-6 text-center">{title}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
