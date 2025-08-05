import eventsData from "@/data/events.json";
import Link from "next/link";
import Image from "next/image";
import { parseISO, isAfter } from "date-fns";

// Define the type for an event
type Event = {
  id: string;
  title: string;
  date: string;
  location: string;
  shortDescription: string;
  coverImage: string;
  gallery: string[];
  content: string[];
  mapLink: string;
};

export default function Events() {
  const now = new Date();

  const parseDate = (date: string): Date => {
    if (date.includes("to")) {
      const [, end] = date.split(" to ");
      return parseISO(end.trim());
    }
    return parseISO(date);
  };

  const upcomingEvents = eventsData.filter((event: Event) =>
    isAfter(parseDate(event.date), now)
  );
  const pastEvents = eventsData.filter((event: Event) =>
    !isAfter(parseDate(event.date), now)
  );

  return (
    <div className="bg-black text-white min-h-screen p-6 md:p-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Events</h1>

      {/* Upcoming Events */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-blue-400">Upcoming Events</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {upcomingEvents.length ? (
            upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))
          ) : (
            <p className="text-gray-400">No upcoming events.</p>
          )}
        </div>
      </section>

      {/* Past Events */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-blue-400">Past Events</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pastEvents.length ? (
            pastEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))
          ) : (
            <p className="text-gray-400">No past events.</p>
          )}
        </div>
      </section>
    </div>
  );
}

function EventCard({ event }: { event: Event }) {
  return (
    <Link
      href={`/events/${event.id}`}
      className="block bg-black rounded-xl shadow-lg shadow-blue-500/20 border border-blue-500/30 overflow-hidden transition hover:shadow-blue-500/40"
    >
      <div className="relative w-full h-48">
        <Image
          src={event.coverImage}
          alt={event.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-1">{event.title}</h3>
        <p className="text-blue-300 text-sm mb-1">{event.location}</p>
        <p className="text-white text-sm mb-3">{event.shortDescription}</p>
      </div>
    </Link>
  );
}