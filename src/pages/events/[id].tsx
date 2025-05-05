import { useRouter } from "next/router";
import eventsData from "@/data/events.json";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick"; // Import React Slick

export default function EventPage() {
    const router = useRouter();
    const { id } = router.query;

    const event = eventsData.find((e) => e.id === id);

    if (!event) return <p className="text-white p-8">Event not found.</p>;

    // Function to format the date
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const options: Intl.DateTimeFormatOptions = { day: "2-digit", month: "2-digit", year: "numeric" };
        return date.toLocaleDateString("en-GB", options); // Format: DD-MM-YYYY
    };

    // Slick Carousel settings
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
                    backgroundColor: i % 2 === 0 ? "#FFFFFF" : "#D3D3D3", // White and light gray dots
                }}
            ></div>
        ),
    };

    return (
        <div className="bg-black text-white min-h-screen p-6 md:p-12">
            <div className="relative">
                {/* Top Banner */}
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
                    <h1 className="text-4xl font-bold mb-2">{event.title}</h1>
                    <p className="text-lg text-blue-400 mb-1">{event.location}</p>
                    <p className="text-gray-400 mb-4">{formatDate(event.date)}</p>

                    {/* Short Description */}
                    <p className="text-lg text-gray-300 mb-8">{event.shortDescription}</p>

                    {/* Map Link */}
                    {event.mapLink && (
                        <div className="mb-8">
                            <Link
                                href={event.mapLink}
                                target="_blank"
                                className="inline-block px-6 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition"
                            >
                                View on Map
                            </Link>
                        </div>
                    )}




                    {/* Event Content */}
                    <div className="space-y-6 pb-20">
                        {event.content.map((block, index) => (
                            <p key={index} className="text-lg leading-relaxed text-gray-300">
                                {block}
                            </p>
                        ))}
                    </div>


                    {/* Event Gallery Carousel */}
                    {event.gallery && event.gallery.length > 1 && (
                        <div className="mb-8">
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
