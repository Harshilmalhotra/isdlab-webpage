import { useRouter } from "next/router";
import eventsData from "@/data/events.json";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

export default function EventPage() {
    const router = useRouter();
    const { id } = router.query;

    const event = eventsData.find((e) => e.id === id);

    if (!event) return <p className="text-white p-8">Event not found.</p>;

    // Function to format a single date or range
    const formatDate = (dateString: string): string => {
        if (dateString.includes("to")) {
            const [start, end] = dateString.split(" to ");
            return `${formatDate(start)} to ${formatDate(end)}`;
        }

        const date = new Date(dateString);
        const options: Intl.DateTimeFormatOptions = { day: "2-digit", month: "2-digit", year: "numeric" };
        return date.toLocaleDateString("en-GB", options);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        customPaging: (i: number) => (
            <div
                style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: i % 2 === 0 ? "#FFFFFF" : "#D3D3D3",
                }}
            ></div>
        ),
    };

    return (
        <div className="bg-black text-white min-h-screen p-6 md:p-12">
            <div className="relative">
                {/* Banner */}
                <div className="w-full h-60 md:h-80 relative mb-8">
                    <Image
                        src={event.coverImage}
                        alt={event.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-xl"
                        priority
                    />
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* Back Button */}
                    <div className="mb-6">
                        <Link href="/events" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition">
                            <svg
                                className="w-5 h-5 mr-2"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to All Events
                        </Link>
                    </div>

                    {/* Title & Details */}
                    <h1 className="text-4xl font-bold mb-2">{event.title}</h1>
                    <p className="text-lg text-blue-400 mb-1">{event.location}</p>
                    <p className="text-gray-400 mb-4">{formatDate(event.date)}</p>

                    <p className="text-lg text-gray-300 mb-8">{event.shortDescription}</p>

                    {/* Optional Links */}
                    <div className="mb-8 flex space-x-6">
                        {event.mapLink && (
                            <Link
                                href={event.mapLink}
                                target="_blank"
                                className="inline-block px-6 py-2 bg-blue-800 text-white rounded-full shadow-lg hover:bg-blue-700 transition"
                            >
                                View on Map
                            </Link>
                        )}
                        {"link" in event && event.link && (
                            <Link
                                href={event.link}
                                target="_blank"
                                className="inline-block px-6 py-2 bg-green-800 text-white rounded-full shadow-lg hover:bg-green-700 transition"
                            >
                                Event Link
                            </Link>
                        )}
                    </div>

                    {/* Main Content */}
                    <div className="space-y-6 pb-20">
                        {event.content.map((block, index) => (
                            <p key={index} className="text-lg leading-relaxed text-gray-300">
                                {block}
                            </p>
                        ))}
                    </div>

                    {/* Sub-events section */}
                    {"subEvents" in event && Array.isArray(event.subEvents) && event.subEvents.length > 0 && (
                        <div className="mt-16">
                            <h2 className="text-2xl font-semibold mb-6">Competitions</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {event.subEvents.map((subEvent, index) => (
                                    <div key={index} className="bg-gray-900 rounded-xl p-6 shadow-lg">
                                        <h3 className="text-xl font-bold text-white mb-2">{subEvent.name}</h3>
                                        <p className="text-gray-300 mb-2">{subEvent.description}</p>
                                        <p className="text-sm text-gray-400 mb-1">
                                            <strong>Venue:</strong> {subEvent.venue}
                                        </p>
                                        <p className="text-sm text-gray-400 mb-1">
                                            <strong>Prize Pool:</strong> {subEvent.prizePool}
                                        </p>
                                        <p className="text-sm text-gray-400 mb-1">
                                            <strong>Entry Fee:</strong> {subEvent.entryFee}
                                        </p>
                                        <p className="text-sm text-gray-400 mb-3">
                                            <strong>Team Size:</strong> {subEvent.teamSize}
                                        </p>
                                        <p className="text-sm text-yellow-400 font-semibold">{subEvent.status}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Gallery Carousel */}
                    {event.gallery && event.gallery.length > 1 && (
                        <div className="mt-16">
                            <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
                            <div className="flex justify-center">
                                <Slider {...settings} className="w-full max-w-3xl">
                                    {event.gallery.map((image, index) => (
                                        <div key={index} className="flex justify-center items-center">
                                            <div className="w-full max-w-3xl h-64 md:h-80 overflow-hidden">
                                                <Image
                                                    src={image}
                                                    alt={`Gallery image ${index + 1}`}
                                                    width={1000}
                                                    height={600}
                                                    className="rounded-xl object-cover w-full h-full"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
