// components/EventCard.jsx

function EventCard({ event }) {
  return (
    <div className="bg-white text-black shadow-md rounded-lg p-4 mb-4 flex justify-between items-center">
      <div>
        <h2 className="text-xl font-semibold">{event.title}</h2>
        <p className="text-gray-500">📍 {event.location}</p>
        <p className="text-gray-700">{event.date}</p>
      </div>

      <p className="text-lg font-bold text-green-600">
        ${event.price.toLocaleString()}
      </p>
    </div>
  );
}

export default EventCard;
