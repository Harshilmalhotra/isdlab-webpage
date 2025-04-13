import Link from "next/link";

export default function Events() {
  const events = [
    {
      id: 1,
      title: "Event 1",
      poster: "/event1-poster.jpg", // Replace with actual poster image path
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "Event 2",
      poster: "/event2-poster.jpg", // Replace with actual poster image path
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      title: "Event 3",
      poster: "/event3-poster.jpg", // Replace with actual poster image path
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Events</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow p-4"
          >
            {/* Event Poster */}
            <div className="w-full h-48 bg-gray-700 rounded-lg overflow-hidden mb-4">
              <img
                src={event.poster}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Event Title */}
            <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>

            {/* Event Description */}
            <p className="text-gray-300 mb-4">{event.description}</p>

            {/* Link to Event Page */}
            <Link
              href={`/events/${event.id}`}
              className="text-blue-500 hover:underline font-medium"
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}